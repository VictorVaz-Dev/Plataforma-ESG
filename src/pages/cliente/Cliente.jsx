import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Firebase Auth
import { getFirestore, doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore"; // Firestore
import "./Cliente.css";

export default function Cliente() {
    const [email, setEmail] = useState('');
    const [personalEmail, setPersonalEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [fullName, setFullName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [address, setAddress] = useState('');
    const [complaints, setComplaints] = useState([]);
    const [newComplaint, setNewComplaint] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const db = getFirestore();

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setEmail(user.email);
                
                // Carregar dados do cliente do Firestore
                const userDoc = await getDoc(doc(db, "users", user.uid));
                if (userDoc.exists()) {
                    const userData = userDoc.data();
                    setPersonalEmail(userData.personalEmail || '');
                    setPhoneNumber(userData.phoneNumber || '');
                    setFullName(userData.fullName || '');
                    setBirthDate(userData.birthDate || '');
                    setAddress(userData.address || '');
                    setComplaints(userData.complaints || []);
                }

                setIsLoading(false);
            } else {
                location.assign("/Login");
            }
        });

        return () => unsubscribe();
    }, [db]);

    // Função para salvar/atualizar dados do usuário no Firestore
    const handleSave = async () => {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
            try {
                await setDoc(doc(db, "users", user.uid), {
                    personalEmail: personalEmail,
                    phoneNumber: phoneNumber,
                    fullName: fullName,
                    birthDate: birthDate,
                    address: address,
                    complaints: complaints
                });
                alert("Dados atualizados com sucesso!");
            } catch (error) {
                console.error("Erro ao salvar dados: ", error);
            }
        }
    };

    // Função para adicionar uma nova reclamação
    const handleAddComplaint = async () => {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user && newComplaint.trim()) {
            const userRef = doc(db, "users", user.uid);
            try {
                await updateDoc(userRef, {
                    complaints: arrayUnion(newComplaint)
                });
                setComplaints((prevComplaints) => [...prevComplaints, newComplaint]);
                setNewComplaint(''); // Limpa o campo de nova reclamação
            } catch (error) {
                console.error("Erro ao adicionar reclamação: ", error);
            }
        }
    };

    // Função para remover uma reclamação
    const handleRemoveComplaint = async (complaintToRemove) => {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
            const userRef = doc(db, "users", user.uid);
            try {
                // Remove a reclamação do array no Firestore
                await updateDoc(userRef, {
                    complaints: arrayRemove(complaintToRemove)
                });
                setComplaints((prevComplaints) =>
                    prevComplaints.filter(complaint => complaint !== complaintToRemove)
                );
            } catch (error) {
                console.error("Erro ao remover reclamação: ", error);
            }
        }
    };

    if (isLoading) {
        return <div className="carregamento">Carregando...</div>;
    }

    return (
        <div className="customer-area">
            <header>
                <h1>Área do Cliente</h1>
                <p><b><i>Clica no botão "salvar dados" para não precisar preencher os dados novamente!</i></b></p>
                <br/>
            </header>
            <div className="user-info">
                <h2>Bem-vindo, {email}</h2>
                <br/>
                <p>Email cadastrado: {email}</p>
            </div>

            <div className="customer-data">
                <h2>Seus Dados</h2>
                <form>
                    <div>
                        <label htmlFor="fullName">Nome Completo:</label><br/>
                        <input
                            type="text"
                            id="fullName"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </div><br/>
                    <div>
                        <label htmlFor="personalEmail">Email Pessoal:</label><br/>
                        <input
                            type="email"
                            id="personalEmail"
                            value={personalEmail}
                            onChange={(e) => setPersonalEmail(e.target.value)}
                        />
                    </div><br/>
                    <div>
                        <label htmlFor="phoneNumber">Número de Telefone:</label><br/>
                        <input
                            type="tel"
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div><br/>
                    <div>
                        <label htmlFor="birthDate">Data de Nascimento:</label><br/>
                        <input
                            type="date"
                            id="birthDate"
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
                        />
                    </div><br/>
                    <div>
                        <label htmlFor="address">Endereço:</label><br/>
                        <input
                            type="text"
                            id="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div><br/>
                    <button className="button-coment" type="button" onClick={handleSave}>
                        Salvar Dados
                    </button>
                </form>
            </div><br/><br/>

            {/* Área de reclamações */}
            <div className="complaints-area">
                <h2>Suas Reclamações</h2><br/>
                <form>
                    <div>
                        <label htmlFor="newComplaint">Adicionar Reclamação:</label><br/>
                        <input
                            type="text"
                            id="newComplaint"
                            value={newComplaint}
                            onChange={(e) => setNewComplaint(e.target.value)}
                        />
                    </div>
                    <button className="button-coment" type="button" onClick={handleAddComplaint}>
                        Enviar Reclamação
                    </button>
                </form><br/>

                <ul>
                    {complaints.length === 0 ? (
                        <p>Você não tem reclamações registradas.</p>
                    ) : (
                        complaints.map((complaint, index) => (
                            <li className="listaComent" key={index}>
                                <p className="paragrafoComent">{complaint}</p>
                                <button
                                    className="button-coment"
                                    type="button"
                                    onClick={() => handleRemoveComplaint(complaint)}
                                >
                                    Apagar Reclamação
                                </button><br />
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
}