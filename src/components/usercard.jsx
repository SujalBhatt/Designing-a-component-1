// write the component code here
import React from "react";

const Usercard = () => {
  // Static user details
  const profilePhoto = "https://wallpapers.com/images/hd/professional-profile-pictures-2880-x-1920-7jvygpai7v9zkg2j.jpg";
  const name = "John Doe";
  const email = "johndoe@example.com";
  const phone = "+1 234 567 890";
  const address = "1234 Elm Street, Springfield, USA";

  return (
    <div style={styles.card}>
      <img src={profilePhoto} alt="Profile" style={styles.image} />
      <h2 style={styles.name}>{name}</h2>
      <p style={styles.info}><strong>Email:</strong> {email}</p>
      <p style={styles.info}><strong>Phone:</strong> {phone}</p>
      <p style={styles.info}><strong>Address:</strong> {address}</p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    textAlign: "center",
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  },
  image: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "10px",
  },
  name: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "8px 0",
  },
  info: {
    fontSize: "14px",
    margin: "4px 0",
  },
};

export default Usercard;
