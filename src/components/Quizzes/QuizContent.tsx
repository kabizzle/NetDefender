interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

// explanation part needs to be changed
const Week1Quiz: QuizQuestion[] = [
  {
    id: 1,
    question: 'Which type of attack renders a website unusable for legitimate users?',
    options: ['Denial of Service', 'Worm', 'Packet sniffing'],
    correctAnswer: 'Denial of Service',
    explanation:
      'When a DoS attack occurs, it can be stopped by identifying the host sending the traffic and terminating their connection to the server.\n\nWhen multiple sources generate traffic, it is classified as a Distributed Denial of Service (DDoS) attack.\n\nDDoS attacks are especially challenging to detect and defend against, as there can be many hosts.\n\nSome ways to prevent DoS attacks are by monitoring and analysing network traffic, and implementing a firewall and intrusion detection system.'
  },
  {
    id: 2,
    question: 'Which type of attack involves injecting packets with false source addresses?',
    options: ['Trojan Horse', 'Man-in-the-middle', 'Masquerading'],
    correctAnswer: 'Masquerading',
    explanation:
      'Packets with fake source addresses, can be sent to receivers. This makes it difficult to determine who the sender is or where the attack came from.\n\nThis type of attack can be prevented by using End-point authentication. End-point authentication allows receivers to ensure they are receiving packets from a legitimate source.\n\nYou will learn more about end-point authentication in later missions. '
  },
  {
    id: 3,
    question:
      'Which type of attack involves a malicious third party detecting, reading and recording the data sent over a network?',
    options: ['Botnet', 'Ransomware', 'Packet sniffing'],
    correctAnswer: 'Packet sniffing',
    explanation:
      'Security vulnerabilities exist when data is sent over a network to wirelessly-connected devices.\n\nMalicious third parties can access the traffic across a network and analyze packets sent, packet content, private/sensitive information, connection habits, social ties and patterns.\n\nIn order to prevent this, online traffic should be encrypted. This can be done using a VPN, SSL, PGP and other methods that will be discussed in future missions.'
  },
  {
    id: 4,
    question: 'What measure could prevent against Packet Sniffing?',
    options: [
      'Sending well-crafted messages to operating systems',
      'Trojan Horse',
      'Encryption of packets',
      'Sending vast amounts of packets'
    ],
    correctAnswer: 'Encryption of packets',
    explanation:
      'If encrypted packets are intercepted, it is not easy to understand the information contained in them. This allows information to be kept safe from malicious third-parties.'
  },
  {
    id: 5,
    question: 'What measure could prevent against Masquerading?',
    options: ['IP Spoofing', 'End-point Authentication', 'Injecting packets', 'DDoS Attacks'],
    correctAnswer: 'End-point Authentication',
    explanation:
      'If encrypted packets are intercepted, it is not easy to understand the information contained in them. This allows information to be kept safe from malicious third-parties.'
  }
];

const Week2Quiz: QuizQuestion[] = [
  {
    id: 1,
    question: 'Alice is building a website and wants to encrypt the passwords of users. Is SHA-1 a suitable hash function for this purpose?',
    options: ['Yes', 'No'],
    correctAnswer: 'No',
    explanation:
      'SHA-1 is not as safe as other hash functions, such as SHA-2 and SHA-3. The main security concern with SHA-1 is that collisions have been produced. This can impact the security of the website, as a collision could be produced for a user and their account could be accessed. Even though a collision for SHA-1 requires a lot of resources to be produced, it is better to opt for one of the more secure hash functions available.'
  },
  {
    id: 2,
    question: 'Asymmetric cryptography is built upon the principle that:',
    options: ['products of prime numbers can be easily factorized', 
      'prime numbers cannot be factorized', 
      'it is computationally cheap to find product of prime numbers, but computationally costly to factorize the product', 
      'the product of large prime numbers cannot easily be stored in memory'],
    correctAnswer: 'it is computationally cheap to find product of prime numbers, but computationally costly to factorize the product',
    explanation:
      'Hash functions utilise the fact that the generation and arithmetic operations of large prime numbers is relatively easy for modern computers. Therefore, two large prime number will serve as the public and private keys when encrypting some plaintext. The public key is known to anyone, but the private key is known only to the intended recipient.In this way, it will require a large amount of resources for an attacker to find the associated private key of ciphertext, while the intended recipient can decrypt it easily.'
  },
  {
    id: 3,
    question:
      'Which of the following algorithms are used in the network layer to route packets?',
    options: ['Kruskal\'s Algorithm', 'Prim\'s Algorithm', 'Dijkstra\'s Algorithm', 'Newton\'s Algorithm'],
    correctAnswer: 'Dijkstra\'s Algorithm',
    explanation:
      'The role of the network layer is to move packets from sender to receiver. Dijkstra\'s Algorithm is used to determine a shortest-path tree of all subnets in order to route packets in the network.'
  },
  {
    id: 4,
    question: 'What method is implemented as a solution to the Message Integrity problem?',
    options: ['Internet Checksum', 'RSA cryptography', 'Message Authentication Codes (MAC)', 'Open shortest-path first (OSPF)'],
    correctAnswer: 'Message Authentication Codes (MAC)',
    explanation:
      'A secret key is used to hash each message, resulting in a digest known as the MAC. Only the sender and receiver are supposed to know this secret key. When the receiver obtains the message, along with the MAC, they use the secrey key to hash the message. If the hash matches the MAC, it means the message has not been tampered with.'
  },
  {
    id: 5,
    question: 'What is a shortcoming of Message Authentication Codes (MAC), as discussed in this week\'s materials?',
    options: ['Senders are not authenticated', 'Secret is known only by sender and receiver', 'Hash is sent alongside message, making filesize large', 'Hash functions are not complex enough'],
    correctAnswer: 'Senders are not authenticated',
    explanation:
    'Anyone with the secret key can send the correct MAC, so there is no way to authenticate the sender. For example, if secret keys of a company get leaked, attackers can pose as that company and send messages whose MACs match.'
  }
];

export type { QuizQuestion };
export { Week1Quiz, Week2Quiz };
