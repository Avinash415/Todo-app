export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} Avinash Kumar — All Rights Reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: 60,
    padding: 20,
    background: "var(--card)",
    color: "var(--text)",
    textAlign: "center",
  },
};
