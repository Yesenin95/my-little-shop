import React from 'react';
import { Box, Select } from '@chakra-ui/react';

interface FilterOptionsProps {
   onSortChange: (option: string) => void;
}

const FilterOptions: React.FC<FilterOptionsProps> = ({ onSortChange }) => {
   return (
      <Box>
         <Select placeholder="Sort by" onChange={(e) => onSortChange(e.target.value)}>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
            <option value="name_asc">Name: A to Z</option>
            <option value="name_desc">Name: Z to A</option>
         </Select>
      </Box>
   );
};

export default FilterOptions;
