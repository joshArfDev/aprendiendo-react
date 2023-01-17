export function TwitterFollowCard({ userName, name, isFollowing }) {
    const imageSrc = `https://unavatar.io/${userName}`;

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={ imageSrc }
          alt="El avatar de joshArfa"
        />
        <div className="tw-followCard-info">
          <strong>{ name }</strong>
          <span className="tw-followCard-infoUsername">@{ userName }</span>
        </div>
      </header>

      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  );
}
