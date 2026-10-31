import type { Project } from "../data/projects";

export function ProjectArtwork({ project }: { project: Project }) {
  if (project.visual === "market") {
    return (
      <div className="artwork artwork-market" aria-hidden="true">
        <div className="market-top"><span>MARKET / SIGNAL</span><span>01—24</span></div>
        <div className="market-reading"><strong>+08.42%</strong><span>WATCHLIST MOVEMENT</span></div>
        <svg className="market-chart" viewBox="0 0 520 170" preserveAspectRatio="none">
          <path className="chart-grid" d="M0 34H520 M0 85H520 M0 136H520" />
          <path className="chart-fill" d="M0 132 C35 118 47 128 75 105 S118 113 144 88 S188 96 216 69 S258 88 285 58 S325 78 352 49 S392 62 418 36 S466 50 520 12 V170 H0Z" />
          <path className="chart-line" d="M0 132 C35 118 47 128 75 105 S118 113 144 88 S188 96 216 69 S258 88 285 58 S325 78 352 49 S392 62 418 36 S466 50 520 12" />
        </svg>
        <div className="market-bottom"><span>CONTEXT, NOT NOISE.</span><span>ML / 02</span></div>
      </div>
    );
  }
  if (project.visual === "anime") {
    return (
      <div className="artwork artwork-anime" aria-hidden="true">
        <div className="anime-grain" />
        <span className="anime-index">RX — ARCHIVE / 03</span>
        <div className="anime-title">AFTER<br/><i>HOURS</i></div>
        <div className="anime-orbit" />
        <span className="anime-foot">A DIFFERENT FRAME OF MIND</span>
      </div>
    );
  }
  if (project.visual === "chat") {
    return (
      <div className="artwork artwork-chat" aria-hidden="true">
        <div className="chat-frame">
          <div className="chat-head"><span className="chat-avatar">C</span><div><b>Glass room</b><small>conversation preview</small></div><span className="chat-dots">•••</span></div>
          <div className="chat-bubble bubble-left">The best interfaces feel effortless.</div>
          <div className="chat-bubble bubble-right">That takes a lot of thought.</div>
          <div className="chat-bubble bubble-left short">Exactly.</div>
          <div className="chat-compose"><span>Write a message...</span><i>↗</i></div>
        </div>
        <span className="chat-caption">BUILT FOR THE HUMAN SIDE OF TECH.</span>
      </div>
    );
  }
  if (project.visual === "studio") {
    return (
      <div className="artwork artwork-studio" aria-hidden="true">
        <div className="studio-label">POCKET-SIZED WORKSHOP</div>
        <div className="studio-phone"><div className="studio-notch"/><div className="studio-editor"><span>01</span><span>fun main() {"{"}</span><span className="studio-indent">println("hello")</span><span>{"}"}</span><i className="studio-cursor"/></div></div>
        <div className="studio-side-note">IDEA<br/>→<br/>BUILD</div>
      </div>
    );
  }
  if (project.visual === "desktop") {
    return (
      <div className="artwork artwork-desktop" aria-hidden="true">
        <div className="desktop-window">
          <div className="desktop-bar"><span>RUN / ANDROID</span><div><i/><i/><i/></div></div>
          <div className="desktop-body"><div className="desktop-sidebar"><b>LIBRARY</b><span>All apps</span><span>Recent</span><span>Settings</span></div><div className="desktop-stage"><div className="apk-tile"><strong>APK</strong><small>APP PACKAGE</small></div><div className="desktop-drop">DROP TO IMPORT</div><div className="desktop-launch">IMPORT &amp; RUN <span>↗</span></div></div></div>
        </div>
        <span className="desktop-caption">A SMALLER DISTANCE BETWEEN FILE AND APP.</span>
      </div>
    );
  }
  if (project.visual === "engine") {
    return (
      <div className="artwork artwork-engine" aria-hidden="true">
        <span className="engine-kicker">NOTES FROM THE MACHINE ROOM</span>
        <div className="engine-word">LEARN<br/><em>BY</em><br/>BUILDING.</div>
        <div className="engine-lines"><span/><span/><span/><span/><span/></div>
        <span className="engine-number">R / 06</span>
      </div>
    );
  }
  return (
    <div className="artwork artwork-signal" aria-hidden="true">
      <div className="signal-ring ring-one"/><div className="signal-ring ring-two"/><div className="signal-core">RX</div>
      <span className="signal-meta">SYSTEMS FOR WHAT'S NEXT</span>
      <span className="signal-number">XZ / 01</span>
    </div>
  );
}
