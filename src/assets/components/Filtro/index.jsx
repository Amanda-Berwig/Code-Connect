import "./styles.css";
export default function Filtro({
  tags,
  tagsSelecionadas,
  setTagsSelecionadas,
}) {
  const toggleTag = (tag) => {
    setTagsSelecionadas((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <section className="container-filtro">
      <ul>
        {tags.map((tag) => (
          <li
            key={tag}
            onClick={() => toggleTag(tag)}
            className={tagsSelecionadas.includes(tag) ? "selecionada" : ""}
          >
            {tag}
          </li>
        ))}
      </ul>
      <button onClick={() => setTagsSelecionadas([])}>Limpar tudo</button>
    </section>
  );
}
