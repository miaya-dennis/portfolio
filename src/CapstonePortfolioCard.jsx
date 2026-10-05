function CapstonePortfolioCard() {
  let name = "Capstone"
  let description = "A capstone project that demonstrates my skills in web development."
  let liveUrl = "https://miaya-dennis.github.io/capstone/"
  let repoUrl = "https://github.com/miaya-dennis/capstone"
  return (
    <article>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        <a href={liveUrl}>See it live</a> · <a href={repoUrl}>Read the code</a>
      </p>
    </article>
  )
}

export default CapstonePortfolioCard