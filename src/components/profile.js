import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const location = useLocation();
  const number = location.state?.number || ""; // Access number from location.state
  console.log(number);

  const [user, setUser] = useState(null); // Holds user data
  const [message, setMessage] = useState(""); // Holds error or status messages

  const findUserByNumber = async () => {
    try {
      const response = await axios.post("https://backendimprfct.onrender.com/findUser", { mobileNumber: number });
      if (response.data.success) {
        setUser(response.data.user);
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      setMessage("An error occurred while fetching user data.");
    }
  };

  useEffect(() => {
    // Fetch user data when component mounts
    if (number) {
      findUserByNumber();
    } else {
      setMessage("No user number provided.");
    }
  }, [number]);

  const sendWhatsMessage = () => {
    const url = `https://backendimprfct.onrender.com/referralSystem/${user.referralCode}`;
    const message = `Check out this link to register: ${url}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;

    // Open WhatsApp share link in a new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f4f4f9", padding: "20px" }}>
      {user ? (
        <>
          <header
            style={{
              background: "#4CAF50",
              color: "white",
              padding: "10px",
              textAlign: "center",
              borderRadius: "5px",
            }}
          >
            <h1>Welcome, {user.userName}</h1>
          </header>
          <main
            style={{
              margin: "20px auto",
              padding: "20px",
              backgroundColor: "white",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <h2>Karma Points</h2>
            <p style={{ fontSize: "1.2rem", color: "#333" }}>{user.referralCount}</p>

            <div>
              <p>
                <a
                  href={`http://localhost:3000/referralSystem/${user.referralCode}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "#4CAF50", fontWeight: "bold" }}
                >
                  {`https://backendimprfct.onrender.com/referralSystem/${user.referralCode}`}
                </a>
              </p>
              <div onClick={sendWhatsMessage} style={{ cursor: "pointer" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="currentColor"
                  className="bi bi-whatsapp text-success"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                </svg>
              </div>
            </div>
          </main>
        </>
      ) : (
        <p style={{ textAlign: "center", color: "red" }}>{message}</p>
      )}
    </div>
  );
};

export default Profile;
