import { FlashcardContent } from './Flashcard';

const week1_attacks: FlashcardContent[] = [
  {
    id: 1,
    title: 'Packet Sniffing',
    content:
      'Definition: the practice of gathering, collecting, and logging packets that pass through a computer network.\n \
    Due to security vulnerabilities, the content of packets can be inspected by malicious third-parties.'
  },
  {
    id: 2,
    title: 'Masquerading',
    content:
      'creating a packet with arbitrary source address, packet content and destination address.\n \
    A receiver might be disguised of the true sender.'
  },
  {
    id: 3,
    title: 'Man in the Middle',
    content: ''
  }
];

const week1_crypto: FlashcardContent[] = [
  {
    id: 1,
    title: 'Symmetric Key Cryptography',
    content:
      'In Symmetric Key Cryptography, each letter of the plaintext is mapped to a letter of the alphabet to form ciphertext. If the mapping of plaintext letters to ciphertext letters is known, an encrypted message can be decrypted.'
  }
];

export { week1_attacks, week1_crypto };
