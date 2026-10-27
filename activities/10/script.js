const scenes = [
  {
    "step": 0,
    "label": "Scene 1 of 6 · Understand the request",
    "heading": "Understand the request",
    "subheading": "Review the conversation and evidence, then choose the next support action.",
    "participant": "Hi, could I switch from the morning workshop to the afternoon one?",
    "agent": "Thanks, Taylor. I will compare the session options with your booking.",
    "narrator": "Start with the participant’s current booking.",
    "audio": {
      "participant": "audio/Taylor-participant-01.mp3",
      "agent": "audio/Sam-agent-01.mp3",
      "narrator": "audio/narrator-01.mp3"
    },
    "evidenceLabel": "Fictional workshop desk",
    "evidenceTitle": "Understand the request",
    "image": "assets/updated/BookingFields-verification.png",
    "alt": "Synthetic workshop record: Understand the request",
    "note": "Start with the participant’s current booking.",
    "callout": null,
    "choices": [
      [
        "Read Taylor’s current booking",
        true,
        "Start with the participant’s current booking."
      ],
      [
        "Change all participants’ bookings",
        false,
        "Start with the participant’s current booking."
      ],
      [
        "Close the request",
        false,
        "Start with the participant’s current booking."
      ]
    ]
  },
  {
    "step": 1,
    "label": "Scene 2 of 6 · Compare the options",
    "heading": "Compare the options",
    "subheading": "Review the conversation and evidence, then choose the next support action.",
    "participant": "I would prefer 14:00 if there is room.",
    "agent": "The 14:00 session has one place. It is on 08 April.",
    "narrator": "Confirm the intended session before updating anything.",
    "audio": {
      "participant": "audio/Taylor-participant-02.mp3",
      "agent": "audio/Sam-agent-02.mp3",
      "narrator": "audio/narrator-02.mp3"
    },
    "audioOrder": [
      "agent",
      "participant",
      "narrator"
    ],
    "evidenceLabel": "Fictional workshop desk",
    "evidenceTitle": "Compare the options",
    "image": "assets/updated/Brief-passed.png",
    "alt": "Synthetic workshop record: Compare the options",
    "note": "Confirm the intended session before updating anything.",
    "callout": null,
    "choices": [
      [
        "The preferred date and time",
        true,
        "Confirm the intended session before updating anything."
      ],
      [
        "The color of the booking screen",
        false,
        "Confirm the intended session before updating anything."
      ],
      [
        "An unrelated past reservation",
        false,
        "Confirm the intended session before updating anything."
      ]
    ]
  },
  {
    "step": 2,
    "label": "Scene 3 of 6 · Confirm the preference",
    "heading": "Confirm the preference",
    "subheading": "Review the conversation and evidence, then choose the next support action.",
    "participant": "Yes, 08 April at 14:00 works for me.",
    "agent": "Thank you. I will use that session in your updated summary.",
    "narrator": "Taylor has confirmed the exact date and time.",
    "audio": {
      "participant": "audio/Taylor-participant-03.mp3",
      "agent": "audio/Sam-agent-03.mp3",
      "narrator": "audio/narrator-03.mp3"
    },
    "evidenceLabel": "Fictional workshop desk",
    "evidenceTitle": "Confirm the preference",
    "image": "assets/updated/TagBoard-routing-label.png",
    "alt": "Synthetic workshop record: Confirm the preference",
    "note": "Taylor has confirmed the exact date and time.",
    "callout": null,
    "choices": [
      [
        "The preferred session is confirmed",
        true,
        "Taylor has confirmed the exact date and time."
      ],
      [
        "The entire workshop is canceled",
        false,
        "Taylor has confirmed the exact date and time."
      ],
      [
        "No reply is needed",
        false,
        "Taylor has confirmed the exact date and time."
      ]
    ]
  },
  {
    "step": 3,
    "label": "Scene 4 of 6 · Update the summary",
    "heading": "Update the summary",
    "subheading": "Review the conversation and evidence, then choose the next support action.",
    "participant": "Will you send me the new details?",
    "agent": "Yes. I am updating your summary to show 14:00.",
    "narrator": "The summary should reflect the agreed session.",
    "audio": {
      "participant": "audio/Taylor-participant-04.mp3",
      "agent": "audio/Sam-agent-04.mp3",
      "narrator": "audio/narrator-04.mp3"
    },
    "evidenceLabel": "Fictional workshop desk",
    "evidenceTitle": "Update the summary",
    "image": "assets/updated/send-SessionChecklist.png",
    "alt": "Synthetic workshop record: Update the summary",
    "note": "The summary should reflect the agreed session.",
    "callout": null,
    "choices": [
      [
        "The confirmed 14:00 session",
        true,
        "The summary should reflect the agreed session."
      ],
      [
        "The old 09:00 session",
        false,
        "The summary should reflect the agreed session."
      ],
      [
        "A summary with no time",
        false,
        "The summary should reflect the agreed session."
      ]
    ]
  },
  {
    "step": 3,
    "label": "Scene 5 of 6 · Check understanding",
    "heading": "Check understanding",
    "subheading": "Review the conversation and evidence, then choose the next support action.",
    "participant": "Great. So I should arrive for the 14:00 session on 08 April?",
    "agent": "That is right. The updated summary includes the venue details too.",
    "narrator": "A brief confirmation helps both people leave with the same understanding.",
    "audio": {
      "participant": "audio/Taylor-participant-05.mp3",
      "agent": "audio/Sam-agent-05.mp3",
      "narrator": "audio/narrator-05.mp3"
    },
    "evidenceLabel": "Fictional workshop desk",
    "evidenceTitle": "Check understanding",
    "image": "assets/updated/TagBoard-Checklist-events.png",
    "alt": "Synthetic workshop record: Check understanding",
    "note": "A brief confirmation helps both people leave with the same understanding.",
    "callout": null,
    "choices": [
      [
        "Confirm those details and invite any final question",
        true,
        "A brief confirmation helps both people leave with the same understanding."
      ],
      [
        "Introduce an unrelated service",
        false,
        "A brief confirmation helps both people leave with the same understanding."
      ],
      [
        "Tell Taylor to guess the venue",
        false,
        "A brief confirmation helps both people leave with the same understanding."
      ]
    ]
  },
  {
    "step": 4,
    "label": "Scene 6 of 6 · Close the conversation",
    "heading": "Close the conversation",
    "subheading": "Review the conversation and evidence, then choose the next support action.",
    "participant": "That is everything. Thank you for helping.",
    "agent": "You are welcome, Taylor. Enjoy the workshop!",
    "narrator": "A clear completion note tells the next reviewer what happened.",
    "audio": {
      "participant": "audio/Taylor-participant-06.mp3",
      "agent": "audio/Sam-agent-06.mp3",
      "narrator": "audio/narrator-06.mp3"
    },
    "evidenceLabel": "Fictional workshop desk",
    "evidenceTitle": "Close the conversation",
    "image": "assets/updated/bookingupdate-eligible.png",
    "alt": "Synthetic workshop record: Close the conversation",
    "note": "A clear completion note tells the next reviewer what happened.",
    "callout": null,
    "choices": [
      [
        "Record that the summary was sent",
        true,
        "A clear completion note tells the next reviewer what happened."
      ],
      [
        "Erase the conversation notes",
        false,
        "A clear completion note tells the next reviewer what happened."
      ],
      [
        "Reopen an unrelated request",
        false,
        "A clear completion note tells the next reviewer what happened."
      ]
    ]
  }
];
const $ = (selector) => document.querySelector(selector);
const progress = [...document.querySelectorAll(".progress")][0];
let index = 0;
let timers = [];
let activeChoices = [];
let audioRun = 0;
const speech = $("#speech-player");
function wait(fn, ms) {
  timers.push(window.setTimeout(fn, ms));
}
function cancelTimers() {
  timers.forEach(window.clearTimeout);
  timers = [];
}
function delay(ms) {
  return new Promise((resolve) => wait(resolve, ms));
}
function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
function stopAudio() {
  audioRun += 1;
  speech.pause();
  speech.removeAttribute("src");
  speech.load();
}
function playClip(src, speaker, run) {
  return new Promise((resolve) => {
    if (run !== audioRun) return resolve();
    const done = () => {
      speech.onended = null;
      speech.onerror = null;
      resolve();
    };
    $("#audio-status").textContent = `${speaker} is speaking`;
    speech.onended = done;
    speech.onerror = done;
    speech.src = src;
    speech.play().catch(done);
  });
}
async function playSceneAudio(scene, run) {
  const agentFirst = scene.audioOrder?.[0] === "agent";
  if (agentFirst) {
    $("#stage").className = "stage phase-agent-first";
    await playClip(scene.audio.agent, "Sam", run);
    if (run !== audioRun) return;
    await delay(350);
    if (run !== audioRun) return;
    $("#stage").className = "stage phase-agent-participant";
    await playClip(scene.audio.participant, "Taylor", run);
  } else {
    await playClip(scene.audio.participant, "Taylor", run);
    if (run !== audioRun) return;
    await delay(350);
    if (run !== audioRun) return;
    $("#stage").className = "stage phase-agent";
    await playClip(scene.audio.agent, "Sam", run);
  }
  if (run !== audioRun) return;
  await delay(350);
  if (run !== audioRun) return;
  $("#stage").className = "stage phase-evidence";
  await playClip(scene.audio.narrator, "Narrator", run);
  if (run !== audioRun) return;
  await delay(300);
  if (run !== audioRun) return;
  $("#stage").className = "stage phase-decision";
  $("#audio-status").textContent = "Choose the next agent action";
  document
    .querySelectorAll(".choice")
    .forEach((button) => (button.disabled = false));
}
function setScene() {
  cancelTimers();
  stopAudio();
  const run = audioRun;
  const s = scenes[index];
  $("#scene-number").textContent = s.label;
  $("#scene-heading").textContent = s.heading;
  $("#scene-subheading").textContent = s.subheading;
  $("#participant-line").textContent = `“${s.participant}”`;
  $("#agent-line").textContent = `“${s.agent}”`;
  $("#narrator-line").textContent = s.narrator;
  $("#evidence-label").textContent = s.evidenceLabel;
  $("#evidence-title").textContent = s.evidenceTitle;
  $("#evidence-image").src = s.image;
  $("#evidence-image").alt = s.alt;
  $("#evidence-note").textContent = s.note;
  const frame = $("#evidence-frame");
  frame.classList.toggle("is-placeholder", !!s.placeholder);
  frame.dataset.placeholder = s.placeholder || "";
  const callout = $("#callout");
  if (s.callout && (s.callout[0] || s.callout[1])) {
    callout.hidden = false;
    callout.className = `callout ${s.callout[2] === "success" ? "is-success" : ""}`;
    callout.innerHTML = `<b>${s.callout[0] || ""}</b><span>${s.callout[1] || ""}</span>`;
  } else {
    callout.hidden = true;
    callout.className = "callout";
    callout.innerHTML = "";
  }
  progress.innerHTML = [1, 2, 3, 4, 5]
    .map(
      (n, i) =>
        `${i ? "<i></i>" : ""}<span class="${i < s.step ? "is-done" : i === s.step ? "is-active" : ""}">${n}</span>`,
    )
    .join("");
  $("#feedback").hidden = true;
  activeChoices = shuffle(s.choices);
  $("#choices").innerHTML = activeChoices
    .map(
      ([text], i) =>
        `<button class="choice" data-choice="${i}" disabled>${text}</button>`,
    )
    .join("");
  const stage = $("#stage");
  stage.className =
    s.audioOrder?.[0] === "agent"
      ? "stage phase-agent-first"
      : "stage phase-participant";
  playSceneAudio(s, run);
}
function choose(i) {
  const s = scenes[index],
    choice = activeChoices[i],
    buttons = [...document.querySelectorAll(".choice")];
  if (!choice[1]) {
    buttons[i].classList.add("is-wrong");
    $("#feedback").textContent = choice[2];
    $("#feedback").hidden = false;
    return;
  }
  buttons[i].classList.add("is-correct");
  buttons.forEach((b) => (b.disabled = true));
  $("#stage").className = "stage phase-out";
  wait(() => {
    if (index < scenes.length - 1) {
      index++;
      setScene();
    } else finish();
  }, 1200);
}
function scrollToActive(target) {
  requestAnimationFrame(() => {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}
function activateScreen(target) {
  document.querySelectorAll(".roleplay-screen").forEach((screen) => {
    const isTarget = screen === target;
    screen.hidden = !isTarget;
    screen.classList.toggle("is-active", isTarget);
    screen.setAttribute("aria-hidden", String(!isTarget));
  });
  scrollToActive(target);
}
function showScene() {
  activateScreen($("#simulation"));
  setScene();
}
async function finish() {
  stopAudio();
  const run = audioRun;
  activateScreen($("#outro"));
  $("#outro-Taylor").hidden = true;
  $("#outro-Sam").hidden = true;
  await delay(450);
  if (run !== audioRun) return;
  $("#outro-Taylor").textContent =
    "Taylor: “The booking summary looks right now. Thank you for your help.”";
  $("#outro-Taylor").hidden = false;
  await playClip("audio/Taylor-participant-close.mp3", "Taylor", run);
  if (run !== audioRun) return;
  await delay(300);
  if (run !== audioRun) return;
  $("#outro-Sam").textContent =
    "Sam: “You are welcome, Taylor. Enjoy the workshop.”";
  $("#outro-Sam").hidden = false;
  await playClip("audio/Sam-agent-close.mp3", "Sam", run);
  if (run !== audioRun) return;
  window.parent.postMessage({ type: "complete" }, "*");
}
function openModal() {
  $("#modal-image").src = $("#evidence-image").src;
  $("#modal-image").alt = $("#evidence-image").alt;
  $("#modal").hidden = false;
  $("#close-modal").focus();
}
function closeModal() {
  $("#modal").hidden = true;
}
$("#begin").addEventListener("click", showScene);
$("#choices").addEventListener("click", (e) => {
  const button = e.target.closest("[data-choice]");
  if (button) choose(Number(button.dataset.choice));
});
$("#expand").addEventListener("click", openModal);
$("#evidence-image").addEventListener("click", openModal);
$("#close-modal").addEventListener("click", closeModal);
$("#modal").addEventListener("click", (e) => {
  if (e.target === $("#modal")) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
$("#replay").addEventListener("click", () => {
  index = 0;
  stopAudio();
  activateScreen($("#intro"));
});
