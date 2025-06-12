import { Link } from "react-router-dom";
import "../styles/ThankYouPage.scss";

export default function ThankYouPage() {
  return (
    <div className="thankyou-container">
      <h2>送信ありがとうございました！</h2>
      <Link to="/form">もう一度回答する</Link>
    </div>
  );
}
