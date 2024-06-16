export const sortProducts = (products: any[], sortOption: string) => {
   const sortedProducts = [...products];
   switch (sortOption) {
      case 'price_asc':
         sortedProducts.sort((a, b) => a.price - b.price);
         break;
      case 'price_desc':
         sortedProducts.sort((a, b) => b.price - a.price);
         break;
      case 'name_asc':
         sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
         break;
      case 'name_desc':
         sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
         break;
      default:
         break;
   }
   return sortedProducts;
};
