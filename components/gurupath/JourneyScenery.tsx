/** Selkeät, myös pienessä koossa tunnistettavat maisemat. Kaksi aihetta per maailma. */
export default function JourneyScenery({ zone, variant = 0 }: { zone: number; variant?: number }) {
  const scene = zone * 2 + (variant % 2);
  return (
    <svg viewBox="0 0 240 200" fill="none" aria-hidden="true" className="h-auto w-full" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="120" cy="177" rx="99" ry="12" fill={zone >= 3 ? "#221838" : "#798fb5"} fillOpacity=".15" />
      {scene === 0 && (
        <g>
          <rect x="38" y="133" width="162" height="34" rx="5" fill="#397d85" />
          <path d="M55 139h140v21H55q-9-10 0-21Z" fill="#f5f1df" />
          <path d="M69 147h117m-117 6h117" stroke="#c6c5b0" strokeWidth="2" />
          <rect x="50" y="98" width="148" height="32" rx="5" fill="#7d68bd" transform="rotate(-7 50 98)" />
          <path d="m68 102 123-15 2 20-123 15q-9-9-2-20Z" fill="#fff8e8" />
          <rect x="47" y="59" width="145" height="32" rx="5" fill="#4c71ac" />
          <path d="M62 65h125v20H62q-8-10 0-20Z" fill="#fff8e8" />
          <path d="M156 60v43l11-9 11 9V60" fill="#e7b765" />
          <path d="M39 43h19m-9-9v18" stroke="#78aaa4" strokeWidth="3" />
        </g>
      )}
      {scene === 1 && (
        <g>
          <path d="M25 66q51-23 95 0 44-23 95 0v102q-51-20-95 0-44-20-95 0Z" fill="#4b7e9e" />
          <path d="M31 57q48-18 89 5 41-23 89-5v99q-48-18-89 6-41-24-89-6Z" fill="#fff7e4" stroke="#d4c7aa" strokeWidth="3" />
          <path d="M120 64v96" stroke="#cdbb99" strokeWidth="3" />
          {[82, 97, 112, 127].map(y => <path key={y} d={`M47 ${y}q28-5 55 6m36 0q27-11 55-6`} stroke="#a8aba4" strokeWidth="3" />)}
          <path d="M164 54v58l10-8 10 8V53" fill="#b491d0" />
        </g>
      )}
      {scene === 2 && (
        <g>
          <path d="M55 169V94" stroke="#82654e" strokeWidth="13" />
          <circle cx="55" cy="68" r="35" fill="#5aab91" />
          <circle cx="30" cy="92" r="26" fill="#80c5a1" />
          <circle cx="77" cy="94" r="28" fill="#429e85" />
          <path d="m55 122-18-19m18 11 16-18" stroke="#82654e" strokeWidth="6" />
          <rect x="103" y="111" width="105" height="12" rx="3" fill="#b88b61" />
          <rect x="103" y="128" width="105" height="12" rx="3" fill="#c99f72" />
          <path d="M99 148h113m-99-8v32m85-32v32" stroke="#586e7b" strokeWidth="8" />
          <path d="m29 169-5-11m11 11 6-13m178 13-5-11" stroke="#61a58b" strokeWidth="4" />
        </g>
      )}
      {scene === 3 && (
        <g>
          <path d="M14 169q42-15 82 0t80 0 58 0" stroke="#89b9d8" strokeWidth="10" />
          <path d="M15 190q42-15 82 0t80 0 58 0" stroke="#aad4df" strokeWidth="6" />
          <path d="M27 154q93-104 186 0" stroke="#8093b5" strokeWidth="23" />
          <path d="M27 147q93-104 186 0" stroke="#d0d7ed" strokeWidth="9" />
          <path d="M29 135V94m31 13V69m40 24V53m40 40V53m40 54V69m31 66V94M29 94q91-87 182 0" stroke="#5e7598" strokeWidth="6" />
          <circle cx="194" cy="39" r="17" fill="#f2d293" />
        </g>
      )}
      {scene === 4 && (
        <g>
          <rect x="37" y="33" width="166" height="140" rx="5" fill="#695995" />
          <rect x="46" y="43" width="148" height="120" fill="#b9a5d7" />
          {[48, 103].map(y => <g key={y}>
            <rect x="55" y={y} width="17" height="47" rx="2" fill="#f0c582" />
            <rect x="77" y={y + 5} width="23" height="42" rx="2" fill="#6e88af" />
            <rect x="106" y={y + 2} width="17" height="45" rx="2" fill="#eee5d8" />
            <rect x="130" y={y + 7} width="20" height="40" rx="2" fill="#6caaa2" transform={`rotate(-9 130 ${y + 7})`} />
            <rect x="160" y={y} width="22" height="47" rx="2" fill="#9470b5" />
            <path d={`M57 ${y + 33}h12m11 3h17m12-3h11m44 0h15`} stroke="#fff2ce" strokeWidth="3" />
          </g>)}
          <path d="M44 99h152M33 173h174" stroke="#756194" strokeWidth="8" />
        </g>
      )}
      {scene === 5 && (
        <g>
          <path d="M25 125h190m-170 5v44m150-44v44" stroke="#8a6d63" strokeWidth="10" />
          <path d="M36 111q24-10 49 0 25-10 49 0v12H36Z" fill="#fff3d8" stroke="#9b88b5" strokeWidth="3" />
          <path d="M85 111v12" stroke="#b9a589" strokeWidth="2" />
          <path d="M164 111h33m-17-1V62l-29-19" stroke="#64759e" strokeWidth="6" />
          <path d="m135 39 23-11 14 28-39 17Z" fill="#a189c6" />
          <path d="M141 73 118 107h57l-19-37" fill="#ffe4a0" fillOpacity=".45" />
          <rect x="28" y="92" width="25" height="21" rx="4" fill="#6ea79c" />
          <path d="M53 96h7v10h-7" stroke="#6ea79c" strokeWidth="4" />
        </g>
      )}
      {scene === 6 && (
        <g>
          <path d="m22 70 98-45 98 45Z" fill="#c1a1e3" stroke="#e9d6f4" strokeWidth="4" />
          <rect x="31" y="80" width="178" height="11" rx="2" fill="#e9d6f4" />
          {[48, 91, 134, 177].map(x => <g key={x}>
            <rect x={x} y="97" width="16" height="58" fill="#ddc5f0" />
            <path d={`M${x - 4} 96h24m-24 61h24`} stroke="#b496d1" strokeWidth="6" />
          </g>)}
          <path d="M29 165h182m-192 11h202" stroke="#e9d6f4" strokeWidth="9" />
          <circle cx="120" cy="57" r="10" fill="#f4e5ff" />
        </g>
      )}
      {scene === 7 && (
        <g>
          <rect x="29" y="100" width="182" height="72" fill="#b9a6d5" />
          <path d="m23 100 35-26h124l35 26Z" fill="#806aab" />
          <rect x="89" y="54" width="62" height="118" fill="#dfc9eb" />
          <path d="m80 55 40-33 40 33Z" fill="#9c80ba" />
          <circle cx="120" cy="81" r="18" fill="#fff4d6" stroke="#8a739f" strokeWidth="3" />
          <path d="M120 69v12l9 5" stroke="#665779" strokeWidth="3" />
          <path d="M109 171v-36a11 11 0 0 1 22 0v36" fill="#78668b" />
          {[45, 65, 163, 183].map(x => <rect key={x} x={x} y="119" width="12" height="23" rx="2" fill="#fff0c5" />)}
          <path d="M22 175h196" stroke="#e9d6f4" strokeWidth="7" />
        </g>
      )}
      {scene === 8 && (
        <g>
          <circle cx="185" cy="43" r="23" fill="#f5da95" fillOpacity=".8" />
          <path d="m6 172 66-103 47 70 39-93 77 126Z" fill="#8c7fae" />
          <path d="m45 172 72-139 82 139Z" fill="#bbb0d0" />
          <path d="m91 82 26-49 28 48-18-7-11 12-11-15Z" fill="#faf3f5" />
          <path d="m143 82 15-36 25 40-17-7-8 6Z" fill="#eee4f5" />
          <path d="M117 33V9" stroke="#edcb84" strokeWidth="4" />
          <path d="M120 9h28l-7 10h-21Z" fill="#edcb84" />
          <path d="m107 172 12-24-8-15 15-16" stroke="#f6e8c4" strokeWidth="5" />
        </g>
      )}
      {scene === 9 && (
        <g>
          <path d="M79 52H48v23q0 39 42 40m71-63h31v23q0 39-42 40" stroke="#f0c365" strokeWidth="12" />
          <path d="M75 41h90v40q0 46-45 55-45-9-45-55Z" fill="#e9b64f" stroke="#ffe0a0" strokeWidth="4" />
          <path d="M85 49h17v33q0 25 16 37-33-7-33-38Z" fill="#f9d580" />
          <path d="m120 62 8 16 18 3-13 13 3 18-16-8-16 8 3-18-13-13 18-3Z" fill="#fff2bd" />
          <path d="M120 136v21" stroke="#e9b64f" strokeWidth="13" />
          <path d="M98 157h44l8 12H90Z" fill="#f0c365" />
          <rect x="79" y="171" width="82" height="12" rx="3" fill="#9b7a61" />
          <path d="M29 40h12m-6-6v12m163-15h14m-7-7v14" stroke="#f8dfa0" strokeWidth="3" />
        </g>
      )}
    </svg>
  );
}
