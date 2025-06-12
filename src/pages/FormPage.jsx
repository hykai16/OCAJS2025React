import { useNavigate } from "react-router-dom";
import "../styles/FormPage.scss";

export default function FormPage({ formData, setFormData }) {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const interests = formData.interests.includes(value)
        ? formData.interests.filter((i) => i !== value)
        : [...formData.interests, value];

      setFormData({ ...formData, interests });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <div className="form-container">
      <h2>アンケートフォーム</h2>
      <label>
        名前：
        <input name="name" value={formData.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        年齢：
        <input
          name="age"
          value={formData.age}
          type="number"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>性別：</label>
      <label>
        <input
          type="radio"
          name="gender"
          value="男性"
          checked={formData.gender === "男性"}
          onChange={handleChange}
        />{" "}
        男性
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="女性"
          checked={formData.gender === "女性"}
          onChange={handleChange}
        />{" "}
        女性
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="その他"
          checked={formData.gender === "その他"}
          onChange={handleChange}
        />{" "}
        その他
      </label>
      <br />

      <label>興味のある技術：</label>
      <br />
      <label>
        <input
          type="checkbox"
          value="HTML"
          onChange={handleChange}
          checked={formData.interests.includes("HTML")}
        />{" "}
        HTML
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          value="CSS"
          onChange={handleChange}
          checked={formData.interests.includes("CSS")}
        />{" "}
        CSS
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          value="JavaScript"
          onChange={handleChange}
          checked={formData.interests.includes("JavaScript")}
        />{" "}
        JavaScript
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          value="React"
          onChange={handleChange}
          checked={formData.interests.includes("React")}
        />{" "}
        React
      </label>
      <br />

      <label>
        コメント：
        <br />
        <textarea
          name="comment"
          value={formData.comment}
          onChange={handleChange}
        />
      </label>
      <br />

      <button onClick={() => navigate("/confirm")}>確認する</button>
    </div>
  );
}
