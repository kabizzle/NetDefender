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
    content: 'Definition: creating a packet with arbitrary source address, packet content and destination address.'
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
    content: 'End-point Authentication'
  },
  {
    id: 7,
    title: 'Man in the Middle',
    content:
      'Definition: when an attacker resides in one node within the communication pat and intercepts a communication between two systems.'
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
    content:
      'Possible key values: 25. Vulnerability: It is possible to brute force the decryption of ciphertext, since there are only 25 possible keys.'
  },
  {
    id: 4,
    title: 'Monoalphabetic Cipher',
    content:
      'Each letter of the plaintext is fixed to a letter of the alphabet. In this case, a letter can be mapped to itself in the cipher.'
  },
  {
    id: 5,
    title: 'Monoalphabetic Cipher',
    content:
      'Possible key values: 26! . Vulnerability: Stronger than Caesar cipher. However, statistical analysis, such as frequency analysis, can be used to decipher the text'
  },
  {
    id: 6,
    title: 'Polyalphabetic Cipher',
    content: 'Involves the concatenation of different encryption schemes.'
  },
  {
    id: 7,
    title: 'Polyalphabetic Cipher',
    content:
      'Possible key values: 25m. Vulnerability: Since any number of encryption schemes can be concatenated to form this cipher, it is very secure.'
  }
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
    content: `By using large prime numbers as keys, their product can be computed with minimal resources. This makes encryption easily accessible. However, if the prime keys are not known, finding them will require a large computational cost, which makes this method secure.`
  },
  {
    id: 4,
    title: 'Cryptographic Hash Functions',
    content:
      'Hash function takes an input, m, and computes a hash as a fixed-sized string, H(m). Example: Internet checksum, MD5, SHA-2/3.'
  }
];

const week2_packets: FlashcardContent[] = [
  {
    id: 1,
    title: 'Packet routing',
    content: 'The role of the network layer is to move packets from sender to receiver.'
  },
  {
    id: 2,
    title: 'Packet routing',
    content: 'Routers and switches maneuver packets in the network.'
  },
  {
    id: 3,
    title: 'Forwarding',
    content: "Packets are transferred from the router's input link to the appropriate output link"
  },
  {
    id: 4,
    title: 'Routing',
    content: "The network layer determines the route taken by packets, for example, using Dijkstra's algorithm."
  },
  {
    id: 5,
    title: 'Open Shorted Path First (OSPF)',
    content:
      'OSPF is an IP Routing protocol used to distribute IP routing information through an Autonomous System (AS).'
  },
  {
    id: 6,
    title: 'Open Shortest Path First (OSPF)',
    content:
      "Routers broadcast link-state information with each link state change. A topological map of the entire autonomous system (AS) is constructed by the router. Dijkstra's algorithm is used to determine a shortest-path tree to all subnets. Individual link costs are then set by admin."
  }
];

const week2_message_integrity: FlashcardContent[] = [
  {
    id: 1,
    title: 'Message Integrity',
    content: 'In OSPF, each router broadcasts a link-state message to all other routers whenever link states change.'
  },
  {
    id: 2,
    title: 'Message Integrity: Problem',
    content: 'Bogus link-state messages can be distributed, containing incorrect link-state information.'
  },
  {
    id: 3,
    title: 'Message Integrity: Solution',
    content:
      'A secret key is used to hash the message, resulting in a digest known as the Message Authentication Code (MAC).'
  },
  {
    id: 4,
    title: 'Message Authentication Codes (MAC)',
    content:
      'The secret key is known by both sender and receiver. The receiver can decrypt the received message and check if the hashes match. If they do, it means the right secrey key was used and the message was not altered in transit'
  },
  {
    id: 5,
    title: 'Message Authentication Codes (MAC)',
    content:
      'MACs can be used to detect if messages have been tampered with. The most prevalen form is Hash-based Message Authentication Codes (HMAC).'
  },
  {
    id: 6,
    title: 'Message Authentication Codes: Vulnerability',
    content: 'Anyone with the secret key can send the correct MAC. There is no way to authenticate the sender.'
  }
];

const week3_digital_signatures: FlashcardContent[] = [
  {
    id: 1,
    title: 'Digital Signatures',
    content: 'cryptographic technique to prove the identity of the creator of a document.'
  },
  {
    id: 2,
    title: 'Features of Digital Signatures',
    content: 'must be unique, verifiable and non-forgeable.'
  },
  {
    id: 3,
    title: 'Digital Signatures - method',
    content: 'A message is encrypted with sender\'s private key. Receiver can decrypt it with sender\'s known public key, verifying that the message came from sender.'
  },
  {
    id: 4,
    title: 'Digital Signatures',
    content: 'Message Authentication Codes (MACs) cannot be used as digital signatures, since the receiver would need a copy of the MAC to verify it. This means it would not be unique.'
  },
];

const week3_end_point_auth: FlashcardContent[] = [
  {
    id: 1,
    title: 'End-point Authentication',
    content: 'Authentication is difficult in networks, since the other party is "invisible".'
  },
  {
    id: 2,
    title: 'End-point Authentication - vulnerabilities',
    content: 'Man-in-the-middle or replay attacks are possible.'
  },
  {
    id: 3,
    title: 'End-point Authentication - solution',
    content: 'The solution to this is Certified Authorities (CAs).' },
  {
    id: 4,
    title: 'Certified Authority (CA)',
    content: 'Certified Authority (CA) is a trusted third-party that generates a certificate to verify the sender\'s public key.' 
  },
  {
    id: 5,
    title: 'Certified Authority - method',
    content: 'Receiver can use a CA-issued certificate, along with the sender\'s public key to authenticate the sender of a message.'
  }
]


export { week1_attacks, week1_crypto, week2_crypto, week2_packets, week2_message_integrity, week3_digital_signatures, week3_end_point_auth };
