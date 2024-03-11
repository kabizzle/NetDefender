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
      'SHA-1 is not secure, '
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

export type { QuizQuestion };
export { Week1Quiz, Week2Quiz };
