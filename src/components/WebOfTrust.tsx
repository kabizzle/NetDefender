import React from 'react';
import { Box, Text } from '@chakra-ui/react';

// Sample data representing the relationships
const relationships = [
  { entity: 'a', connectsTo: ['b', 'c', 'd'] },
  { entity: 'b', connectsTo: ['e', 'c'] },
  { entity: 'd', connectsTo: ['f'] },
  { entity: 'f', connectsTo: ['a'] },
];

const WebOfTrust = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      {relationships.map((node) => (
        <Box key={node.entity} mt="2">
          <Text fontWeight="bold">{node.entity}</Text>
          {node.connectsTo.map((connectedNode) => (
            <Box key={connectedNode}>
              <Box display="inline-block" width="10" height="1" bg="gray.300" mx="2" />
              <Text display="inline-block">{connectedNode}</Text>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default WebOfTrust;
