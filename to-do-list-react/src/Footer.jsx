import './index.css';

export default function Footer() {
  let year = new Date().getFullYear();
  return (
    <div className="footer">
      <h3>&copy; Zakyboss {year}</h3>
      <hr />
    </div>
  );
}
