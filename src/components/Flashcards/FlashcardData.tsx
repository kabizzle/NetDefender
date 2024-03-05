import { FlashcardContent } from './Flashcard';

const week1_attacks: FlashcardContent[] = [
  {
    id: 1,
    title: 'Packet Sniffing',
    content:
      'Definition: the practice of gathering, collecting, and logging packets that pass through a computer network.'
  },
  {
    id: 2,
    title: 'Packet Sniffing',
    content: 'Due to security vulnerabilities, the content of packets can be inspected by malicious third-parties.'
  },
  {
    id: 3,
    title: 'Packet Sniffing - Solution',
    content: 'Encryption of packets'
  },
  {
    id: 4,
    title: 'Masquerading',
    content:
      'Definition: creating a packet with arbitrary source address, packet content and destination address.'
  },
  {
    id: 5,
    title: 'Masquerading',
    content:
      'A receiver might be disguised of the true sender. Example: IP Spoofing (injecting packets with false source addresses into the internet)'
  },
  {
    id: 6,
    title: 'Masquerading - Solution',
    content:
      'End-point Authentication'
  },
  {
    id: 7,
    title: 'Man in the Middle',
    content: 'Definition: when an attacker resides in one node within the communication pat and intercepts a communication between two systems.'
  },
  {
    id: 8,
    title: 'Man in the Middle',
    content: 'MitM attacks may involve: Packet Sniffing, Injecting packets, Modifying packets or Deleting packets.'
  },
  {
    id: 9,
    title: 'Man in the Middle - Solution',
    content: 'Establish Data Integrity'
  }

];

const week1_crypto: FlashcardContent[] = [
  {
    id: 1,
    title: 'Symmetric Key Cryptography',
    content:
      'In Symmetric Key Cryptography, each letter of the plaintext is mapped to a letter of the alphabet to form ciphertext. If the mapping of plaintext letters to ciphertext letters is known, an encrypted message can be decrypted.'
  },
  {
    id: 2,
    title: 'Caesar Cipher',
    content: 'Involves the cyclic shift of letters in the alphabet by k spaces.'
  },
  {
    id: 3,
    title: 'Caesar Cipher',
    content: 'Possible key values: 25. Vulnerability: It is possible to brute force the decryption of ciphertext, since there are only 25 possible keys.'
  },
  {
    id: 4,
    title: 'Monoalphabetic Cipher',
    content: 'Each letter of the plaintext is fixed to a letter of the alphabet. In this case, a letter can be mapped to itself in the cipher.'
  },  
  {
    id: 5,
    title: 'Monoalphabetic Cipher',
    content: 'Possible key values: 26! . Vulnerability: Stronger than Caesar cipher. However, statistical analysis, such as frequency analysis, can be used to decipher the text'
  },
  {
    id: 6,
    title: 'Polyalphabetic Cipher',
    content: 'Involves the concatenation of different encryption schemes.'
  },  
  {
    id: 7,
    title: 'Polyalphabetic Cipher',
    content: 'Possible key values: 25m. Vulnerability: Since any number of encryption schemes can be concatenated to form this cipher, it is very secure.'
  },
];

const week2_crypto: FlashcardContent[] = [
  {
    id: 1,
    title: 'Asymmetric Cryptography',
    content:
      'Asymmetric Cryptography requires a one-way function for encryption. For example, RSA relies on modulo arithmetic.'
  },
  {
    id: 2,
    title: 'Asymmetric Cryptography - principle',
    content:
      'Finding the product of large prime numbers has a relatively low computational cost. On the other hand, it is very computationally demanding to factorize these products.'
  },
  {
    id: 3,
    title: 'Asymmetric Cryptography - security',
    content:
      `By using large prime numbers as keys, their product can be computed with minimal resources. This makes encryption easily accessible. However, if the prime keys are not known, finding them will require a large computational cost, which makes this method secure.`
  },
  {
    id: 4,
    title: 'Cryptographic Hash Functions',
    content:
      'Hash function takes an input, m, and computes a hash as a fixed-sized string, H(m). Example: Internet checksum, MD5, SHA-2/3.'
  },
  {
    id: 5,
    title: 'Cryptographic Hash Functions',
    content:
      ''
  },
];

export { week1_attacks, week1_crypto, week2_crypto };
