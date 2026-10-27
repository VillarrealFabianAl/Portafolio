window.ACTIVITY_CONFIG = {
  "schemaVersion": 3,
  "activityType": "banner-next-step-challenge",
  "content": {
    "title": "Read the booking state",
    "eyebrow": "Fictional service desk",
    "instructions": "Open a state, inspect the booking banner, and choose the next action. Complete all six challenges.",
    "boardTitle": "Select a banner state",
    "boardHelp": "Each state has a different next action. Use the record and feedback to decide.",
    "progressLabel": "States completed",
    "promptTitle": "Start by selecting a banner",
    "promptText": "Choose a booking state to open its challenge.",
    "challengeLabel": "Choose the correct next step",
    "correctPrefix": "Correct.",
    "incorrectPrefix": "Not quite.",
    "nextStateLabel": "Save and continue",
    "tryAnotherLabel": "Choose another banner state",
    "previewLabel": "Open larger",
    "completedTitle": "All six banner states completed",
    "completedText": "You reviewed every state and selected the correct next step for each one.",
    "finishButton": "Finish activity",
    "completionMessage": "Activity complete. You can continue in Rise now.",
    "modalNote": "The full banner is shown without cropping."
  },
  "items": [
    {
      "id": "New",
      "title": "New",
      "image": "assets/banner-01-New.png",
      "alt": "New — fictional workshop record",
      "prompt": "The booking shows New. What should the support agent do next?",
      "explanation": "Read the participant request and compare it with the workshop brief before choosing an action.",
      "correctChoiceId": "review-TagBoard",
      "choices": [
        {
          "id": "review-TagBoard",
          "label": "Compare the workshop brief"
        },
        {
          "id": "send-email",
          "label": "Ask for the date"
        },
        {
          "id": "close-case",
          "label": "Send summary"
        },
        {
          "id": "escalate-now",
          "label": "Read the new question"
        }
      ]
    },
    {
      "id": "bookingupdate-ineligible",
      "title": "Paused",
      "image": "assets/banner-02-bookingupdate-ineligible.png",
      "alt": "Paused — fictional workshop record",
      "prompt": "The booking shows Paused. What should the support agent do next?",
      "explanation": "A required session detail is missing. Ask for the missing detail and keep the request open.",
      "correctChoiceId": "tell-cannot-update",
      "choices": [
        {
          "id": "tell-cannot-update",
          "label": "Ask for the date"
        },
        {
          "id": "start-bookingupdate",
          "label": "Compare the workshop brief"
        },
        {
          "id": "send-link",
          "label": "Send summary"
        },
        {
          "id": "reclassify-BookingCode",
          "label": "Read the new question"
        }
      ]
    },
    {
      "id": "bookingupdate-eligible",
      "title": "Ready",
      "image": "assets/banner-03-bookingupdate-eligible.png",
      "alt": "Ready — fictional workshop record",
      "prompt": "The booking shows Ready. What should the support agent do next?",
      "explanation": "The session and date match the participant request. Send the updated booking summary.",
      "correctChoiceId": "direct-email-link",
      "choices": [
        {
          "id": "direct-email-link",
          "label": "Send summary"
        },
        {
          "id": "review-TagBoard-again",
          "label": "Compare the workshop brief"
        },
        {
          "id": "close-complete",
          "label": "Ask for the date"
        },
        {
          "id": "escalate-Assigned",
          "label": "Read the new question"
        }
      ]
    },
    {
      "id": "Completed",
      "title": "Completed",
      "image": "assets/banner-04-Completed.png",
      "alt": "Completed — fictional workshop record",
      "prompt": "The booking shows Completed. What should the support agent do next?",
      "explanation": "The updated summary has been sent. Review any new question as a separate request.",
      "correctChoiceId": "clarify-issue",
      "choices": [
        {
          "id": "clarify-issue",
          "label": "Read the new question"
        },
        {
          "id": "resend-link",
          "label": "Compare the workshop brief"
        },
        {
          "id": "review-label-first",
          "label": "Ask for the date"
        },
        {
          "id": "support desk-update",
          "label": "Send summary"
        }
      ]
    },
    {
      "id": "no-banner",
      "title": "Unassigned",
      "image": "assets/banner-05-no-banner.png",
      "alt": "Unassigned — fictional workshop record",
      "prompt": "The booking shows Unassigned. What should the support agent do next?",
      "explanation": "Choose a request category so the appropriate workshop team can review it.",
      "correctChoiceId": "guide-close-reclassify",
      "choices": [
        {
          "id": "guide-close-reclassify",
          "label": "Choose a category"
        },
        {
          "id": "treat-New",
          "label": "Compare the workshop brief"
        },
        {
          "id": "send-bookingupdate-link",
          "label": "Ask for the date"
        },
        {
          "id": "auto-escalate",
          "label": "Send summary"
        }
      ]
    },
    {
      "id": "Assigned",
      "title": "Assigned",
      "image": "assets/banner-06-Assigned.png",
      "alt": "Assigned — fictional workshop record",
      "prompt": "The booking shows Assigned. What should the support agent do next?",
      "explanation": "A coordinator is already reviewing the request. Add relevant new details to the existing record.",
      "correctChoiceId": "under-review-close",
      "choices": [
        {
          "id": "under-review-close",
          "label": "Update the existing record"
        },
        {
          "id": "continue-support desk",
          "label": "Compare the workshop brief"
        },
        {
          "id": "mark-eligible",
          "label": "Ask for the date"
        },
        {
          "id": "reclassify-other",
          "label": "Send summary"
        }
      ]
    }
  ],
  "behavior": {
    "requireAllItemsBeforeCompletion": true,
    "allowRevisit": true,
    "completion": {
      "postMessage": {
        "type": "complete"
      }
    }
  },
  "style": {
    "accent": "#4038ba",
    "accentDark": "#2d2798",
    "accentSoft": "#f3f1ff",
    "canvas": "#faf9ff",
    "text": "#211c50",
    "muted": "#625e80",
    "success": "#14724e",
    "error": "#a53049"
  }
};