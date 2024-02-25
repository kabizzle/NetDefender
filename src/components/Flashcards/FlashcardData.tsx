import { FlashcardContent } from "./Flashcard";

const testFlashcards: FlashcardContent[] = [
  {
    id: 1,
    title: "Packet Sniffing",
    content: "Definition: the practice of gathering, collecting, and logging packets that pass through a computer network.\n \
    Due to security vulnerabilities, the content of packets can be inspected by malicious third-parties.",
  },
  {
    id: 2, 
    title: "Masquerading",
    content: "creating a packet with arbitrary source address, packet content and destination address.\n \
    A receiver might be disguised of the true sender.",
  },
  {
    id: 3, 
    title: "Third for test",
    content: "test third flashcard.",
  },
];

export {testFlashcards};
