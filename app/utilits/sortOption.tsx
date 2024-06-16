// components/utilits/SortOptions.tsx
import React from 'react';
import { Box, Select } from '@chakra-ui/react';

interface SortOptionsProps {
   onSortChange: (option: string) => void;
}

const SortOptions: React.FC<SortOptionsProps> = ({ onSortChange }) => {
   return (
      <Box>
         <Select placeholder="Сортировать по" onChange={(e) => onSortChange(e.target.value)}>
            <option value="price_asc">Цена (по возрастанию)</option>
            <option value="price_desc">Цена (по убыванию)</option>
            <option value="name_asc">Название (A-Z)</option>
            <option value="name_desc">Название (Z-A)</option>
         </Select>
      </Box>
   );
};

export default SortOptions;
