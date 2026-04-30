/* =========================================================
   Tweaks panel — exposes a small control surface, wires up
   the edit-mode messaging contract, and persists to the
   EDITMODE block in the host HTML.
   ========================================================= */

const TweakDefaultsGet = () => window.__TWEAKS__ || {};

const TweaksPanel = ({ tweaks, onChange, visible }) => {
  if (!visible) return null;
  const Group = ({ label, children }) => (
    <div className="tweaks-row">
      <label>{label}</label>
      <div className="opts">{children}</div>
    </div>
  );
  const Btn = ({ on, onClick, children }) => (
    <button className={on ? "active" : ""} onClick={onClick}>{children}</button>
  );
  return (
    <div className="tweaks-panel open no-print">
      <h4>Tweaks</h4>
      <Group label="表紙スタイル">
        {["classic","photo","editorial"].map(v => (
          <Btn key={v} on={tweaks.cover === v} onClick={() => onChange({cover: v})}>{v}</Btn>
        ))}
      </Group>
      <Group label="OK／NG カード">
        {["soft","bordered","stamp"].map(v => (
          <Btn key={v} on={tweaks.okngStyle === v} onClick={() => onChange({okngStyle: v})}>{v}</Btn>
        ))}
      </Group>
      <Group label="本文サイズ">
        {[{k:15,l:"S"},{k:17,l:"M"},{k:19,l:"L"}].map(o => (
          <Btn key={o.k} on={tweaks.bodySize === o.k} onClick={() => onChange({bodySize: o.k})}>{o.l}</Btn>
        ))}
      </Group>
      <Group label="行間">
        {[{k:1.7,l:"つめる"},{k:1.85,l:"標準"},{k:2.0,l:"ゆったり"}].map(o => (
          <Btn key={o.k} on={tweaks.lineHeight === o.k} onClick={() => onChange({lineHeight: o.k})}>{o.l}</Btn>
        ))}
      </Group>
      <Group label="色調">
        {[
          {k:"blue", l:"青（既定）"},
          {k:"teal", l:"青緑"},
          {k:"warm", l:"温かみ"},
        ].map(o => (
          <Btn key={o.k} on={tweaks.accent === o.k} onClick={() => onChange({accent: o.k})}>{o.l}</Btn>
        ))}
      </Group>
    </div>
  );
};

Object.assign(window, { TweaksPanel });
