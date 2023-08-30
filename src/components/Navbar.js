export default function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#A47551",
        color: "white",
        height: "50px",
        alignItems: "center",
      }}
    >
      <div
        style={{
          marginLeft: "20px",
          fontSize: "22px",
          fontFamily: "cursive",
        }}
      >
        BonStay
      </div>
      <div style={{ display: "flex", marginRight: "20px", gap: "40px" }}>
        <div>Home</div>
        <div>Hotels</div>
        <div>Bookings</div>
        <div>Logout</div>
      </div>
    </div>
  );
}
