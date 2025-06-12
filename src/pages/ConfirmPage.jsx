import { useNavigate } from "react-router-dom";
import "../styles/ConfirmPage.scss";

export default function ConfirmPage({ formData }) {
  const navigate = useNavigate();

  return (
    <div className="confirm-container">
      <h2>確認画面</h2>
      <p>名前: {formData.name}</p>
      <p>年齢: {formData.age}</p>
      <p>性別: {formData.gender}</p>
      <p>興味のある技術: {formData.interests.join(", ")}</p>
      <p>コメント: {formData.comment}</p>
      <div className="button-group">
        <button onClick={() => navigate("/form")}>戻る</button>
        <button onClick={() => navigate("/thankyou")}>送信</button>
      </div>
    </div>
  );
}
