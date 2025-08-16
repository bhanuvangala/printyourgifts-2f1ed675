export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

export const categories = [
  'Mugs',
  'T-Shirts', 
  'Photo Frames',
  'Keychains',
  'Cushions',
  'Bottles',
  'Calendars',
  'Mobile Cases'
];

export const products: Product[] = [
  // Mugs
  { id: '1', name: 'Custom Photo Mug', price: 499, category: 'Mugs', image: '/api/placeholder/300/300', description: 'Personalized ceramic mug with your favorite photo' },
  { id: '2', name: 'Magic Color Changing Mug', price: 699, category: 'Mugs', image: '/api/placeholder/300/300', description: 'Heat-sensitive mug that reveals your design when hot' },
  { id: '3', name: 'Birthday Special Mug', price: 549, category: 'Mugs', image: '/api/placeholder/300/300', description: 'Customized birthday celebration mug' },
  { id: '4', name: 'Anniversary Love Mug', price: 599, category: 'Mugs', image: '/api/placeholder/300/300', description: 'Romantic anniversary design mug' },
  { id: '5', name: 'Office Motivation Mug', price: 449, category: 'Mugs', image: '/api/placeholder/300/300', description: 'Inspiring quotes for your workplace' },
  { id: '6', name: 'Travel Photo Mug', price: 529, category: 'Mugs', image: '/api/placeholder/300/300', description: 'Showcase your travel memories' },
  { id: '7', name: 'Couple Love Mug Set', price: 899, category: 'Mugs', image: '/api/placeholder/300/300', description: 'Matching pair for couples' },
  { id: '8', name: 'Kids Cartoon Mug', price: 399, category: 'Mugs', image: '/api/placeholder/300/300', description: 'Fun cartoon designs for children' },
  { id: '9', name: 'Family Portrait Mug', price: 649, category: 'Mugs', image: '/api/placeholder/300/300', description: 'Beautiful family photo mug' },
  { id: '10', name: 'Gradient Design Mug', price: 479, category: 'Mugs', image: '/api/placeholder/300/300', description: 'Modern gradient color mug' },

  // T-Shirts
  { id: '11', name: 'Custom Photo T-Shirt', price: 799, category: 'T-Shirts', image: '/api/placeholder/300/300', description: 'High-quality cotton tee with your photo' },
  { id: '12', name: 'Birthday Print T-Shirt', price: 749, category: 'T-Shirts', image: '/api/placeholder/300/300', description: 'Personalized birthday celebration tee' },
  { id: '13', name: 'Couple Matching T-Shirts', price: 1299, category: 'T-Shirts', image: '/api/placeholder/300/300', description: 'Set of 2 matching couple tees' },
  { id: '14', name: 'Company Logo T-Shirt', price: 649, category: 'T-Shirts', image: '/api/placeholder/300/300', description: 'Corporate branding t-shirt' },
  { id: '15', name: 'Sports Team T-Shirt', price: 699, category: 'T-Shirts', image: '/api/placeholder/300/300', description: 'Custom team jersey style' },
  { id: '16', name: 'Motivational Quote Tee', price: 599, category: 'T-Shirts', image: '/api/placeholder/300/300', description: 'Inspiring message t-shirt' },
  { id: '17', name: 'Pet Photo T-Shirt', price: 729, category: 'T-Shirts', image: '/api/placeholder/300/300', description: 'Show love for your pet' },
  { id: '18', name: 'Graduation T-Shirt', price: 779, category: 'T-Shirts', image: '/api/placeholder/300/300', description: 'Celebrate academic achievement' },
  { id: '19', name: 'Band Concert Tee', price: 849, category: 'T-Shirts', image: '/api/placeholder/300/300', description: 'Music band tour style' },
  { id: '20', name: 'Abstract Art T-Shirt', price: 669, category: 'T-Shirts', image: '/api/placeholder/300/300', description: 'Artistic design print' },

  // Photo Frames
  { id: '21', name: 'Wooden Photo Frame', price: 899, category: 'Photo Frames', image: '/api/placeholder/300/300', description: 'Premium wooden frame with custom engraving' },
  { id: '22', name: 'Metal Frame with Quote', price: 1199, category: 'Photo Frames', image: '/api/placeholder/300/300', description: 'Sleek metal frame with personalized quote' },
  { id: '23', name: 'Acrylic Modern Frame', price: 799, category: 'Photo Frames', image: '/api/placeholder/300/300', description: 'Contemporary acrylic photo frame' },
  { id: '24', name: 'Couple Anniversary Frame', price: 1099, category: 'Photo Frames', image: '/api/placeholder/300/300', description: 'Special anniversary photo frame' },
  { id: '25', name: 'Baby Milestone Frame', price: 949, category: 'Photo Frames', image: '/api/placeholder/300/300', description: 'Track baby growth milestones' },
  { id: '26', name: 'Wedding Photo Frame', price: 1299, category: 'Photo Frames', image: '/api/placeholder/300/300', description: 'Elegant wedding memory frame' },
  { id: '27', name: 'Family Tree Frame', price: 1199, category: 'Photo Frames', image: '/api/placeholder/300/300', description: 'Multi-photo family display' },
  { id: '28', name: 'Travel Memory Frame', price: 849, category: 'Photo Frames', image: '/api/placeholder/300/300', description: 'Display your travel photos' },
  { id: '29', name: 'Graduation Frame', price: 799, category: 'Photo Frames', image: '/api/placeholder/300/300', description: 'Commemorate academic success' },
  { id: '30', name: 'Pet Memory Frame', price: 699, category: 'Photo Frames', image: '/api/placeholder/300/300', description: 'Beautiful frame for pet photos' },

  // Keychains
  { id: '31', name: 'Photo Keychain Round', price: 299, category: 'Keychains', image: '/api/placeholder/300/300', description: 'Round photo keychain' },
  { id: '32', name: 'Heart Shape Keychain', price: 349, category: 'Keychains', image: '/api/placeholder/300/300', description: 'Heart-shaped romantic keychain' },
  { id: '33', name: 'Rectangle Photo Keychain', price: 279, category: 'Keychains', image: '/api/placeholder/300/300', description: 'Classic rectangular design' },
  { id: '34', name: 'Car Number Keychain', price: 399, category: 'Keychains', image: '/api/placeholder/300/300', description: 'Personalized car number plate' },
  { id: '35', name: 'LED Photo Keychain', price: 499, category: 'Keychains', image: '/api/placeholder/300/300', description: 'Keychain with LED light' },
  { id: '36', name: 'Wooden Name Keychain', price: 329, category: 'Keychains', image: '/api/placeholder/300/300', description: 'Engraved wooden keychain' },
  { id: '37', name: 'Metal Photo Keychain', price: 379, category: 'Keychains', image: '/api/placeholder/300/300', description: 'Durable metal keychain' },
  { id: '38', name: 'Couple Photo Keychain', price: 549, category: 'Keychains', image: '/api/placeholder/300/300', description: 'Set of 2 matching keychains' },
  { id: '39', name: 'Star Shape Keychain', price: 319, category: 'Keychains', image: '/api/placeholder/300/300', description: 'Star-shaped photo keychain' },
  { id: '40', name: 'Custom Logo Keychain', price: 429, category: 'Keychains', image: '/api/placeholder/300/300', description: 'Business logo keychain' },

  // Cushions
  { id: '41', name: 'Square Photo Cushion', price: 899, category: 'Cushions', image: '/api/placeholder/300/300', description: 'Soft square cushion with your photo' },
  { id: '42', name: 'Heart Shape Cushion', price: 999, category: 'Cushions', image: '/api/placeholder/300/300', description: 'Heart-shaped romantic cushion' },
  { id: '43', name: 'Round Photo Cushion', price: 849, category: 'Cushions', image: '/api/placeholder/300/300', description: 'Round personalized cushion' },
  { id: '44', name: 'Sequin Magic Cushion', price: 1299, category: 'Cushions', image: '/api/placeholder/300/300', description: 'Reversible sequin cushion' },
  { id: '45', name: 'Couple Love Cushion', price: 1099, category: 'Cushions', image: '/api/placeholder/300/300', description: 'Romantic couple cushion' },
  { id: '46', name: 'Baby Photo Cushion', price: 799, category: 'Cushions', image: '/api/placeholder/300/300', description: 'Soft baby photo cushion' },
  { id: '47', name: 'Pet Cushion', price: 869, category: 'Cushions', image: '/api/placeholder/300/300', description: 'Cushion with pet photo' },
  { id: '48', name: 'Family Collage Cushion', price: 1199, category: 'Cushions', image: '/api/placeholder/300/300', description: 'Multiple family photos' },
  { id: '49', name: 'Quote Cushion', price: 749, category: 'Cushions', image: '/api/placeholder/300/300', description: 'Inspirational quote cushion' },
  { id: '50', name: 'Wedding Cushion', price: 1149, category: 'Cushions', image: '/api/placeholder/300/300', description: 'Beautiful wedding memory cushion' },

  // Bottles
  { id: '51', name: 'Steel Water Bottle 500ml', price: 699, category: 'Bottles', image: '/api/placeholder/300/300', description: 'Insulated steel bottle with custom print' },
  { id: '52', name: 'Glass Photo Bottle', price: 599, category: 'Bottles', image: '/api/placeholder/300/300', description: 'Transparent glass bottle with photo' },
  { id: '53', name: 'Sports Bottle 750ml', price: 749, category: 'Bottles', image: '/api/placeholder/300/300', description: 'Sports bottle for fitness enthusiasts' },
  { id: '54', name: 'Kids Cartoon Bottle', price: 549, category: 'Bottles', image: '/api/placeholder/300/300', description: 'Fun cartoon design for kids' },
  { id: '55', name: 'Couple Bottle Set', price: 1199, category: 'Bottles', image: '/api/placeholder/300/300', description: 'Matching bottles for couples' },
  { id: '56', name: 'Office Name Bottle', price: 629, category: 'Bottles', image: '/api/placeholder/300/300', description: 'Professional bottle with name' },
  { id: '57', name: 'Travel Photo Bottle', price: 679, category: 'Bottles', image: '/api/placeholder/300/300', description: 'Travel memories bottle' },
  { id: '58', name: 'Motivational Quote Bottle', price: 589, category: 'Bottles', image: '/api/placeholder/300/300', description: 'Inspiring quote water bottle' },
  { id: '59', name: 'Gym Bottle 1000ml', price: 799, category: 'Bottles', image: '/api/placeholder/300/300', description: 'Large gym water bottle' },
  { id: '60', name: 'Birthday Bottle', price: 649, category: 'Bottles', image: '/api/placeholder/300/300', description: 'Birthday celebration bottle' },

  // Calendars
  { id: '61', name: 'Wall Photo Calendar', price: 899, category: 'Calendars', image: '/api/placeholder/300/300', description: '12-month wall calendar with photos' },
  { id: '62', name: 'Desk Calendar', price: 649, category: 'Calendars', image: '/api/placeholder/300/300', description: 'Professional desk calendar' },
  { id: '63', name: 'Family Calendar 2024', price: 799, category: 'Calendars', image: '/api/placeholder/300/300', description: 'Family photos for each month' },
  { id: '64', name: 'Wedding Calendar', price: 949, category: 'Calendars', image: '/api/placeholder/300/300', description: 'Wedding memory calendar' },
  { id: '65', name: 'Baby Growth Calendar', price: 849, category: 'Calendars', image: '/api/placeholder/300/300', description: 'Track baby milestones' },
  { id: '66', name: 'Travel Calendar', price: 779, category: 'Calendars', image: '/api/placeholder/300/300', description: 'Your travel photos monthly' },
  { id: '67', name: 'Pet Calendar', price: 699, category: 'Calendars', image: '/api/placeholder/300/300', description: 'Calendar with pet photos' },
  { id: '68', name: 'Nature Calendar', price: 599, category: 'Calendars', image: '/api/placeholder/300/300', description: 'Beautiful nature photography' },
  { id: '69', name: 'Motivational Calendar', price: 729, category: 'Calendars', image: '/api/placeholder/300/300', description: 'Daily motivation quotes' },
  { id: '70', name: 'Corporate Calendar', price: 1099, category: 'Calendars', image: '/api/placeholder/300/300', description: 'Business branding calendar' },

  // Mobile Cases
  { id: '71', name: 'iPhone Photo Case', price: 799, category: 'Mobile Cases', image: '/api/placeholder/300/300', description: 'Custom iPhone case with your photo' },
  { id: '72', name: 'Samsung Photo Case', price: 749, category: 'Mobile Cases', image: '/api/placeholder/300/300', description: 'Samsung phone case personalized' },
  { id: '73', name: 'Couple Phone Cases', price: 1399, category: 'Mobile Cases', image: '/api/placeholder/300/300', description: 'Matching phone cases for couples' },
  { id: '74', name: 'Clear Photo Case', price: 699, category: 'Mobile Cases', image: '/api/placeholder/300/300', description: 'Transparent case with photo insert' },
  { id: '75', name: 'Tough Photo Case', price: 899, category: 'Mobile Cases', image: '/api/placeholder/300/300', description: 'Heavy-duty protection with photo' },
  { id: '76', name: 'Wallet Photo Case', price: 1199, category: 'Mobile Cases', image: '/api/placeholder/300/300', description: 'Phone case with wallet functionality' },
  { id: '77', name: 'Kids Cartoon Case', price: 649, category: 'Mobile Cases', image: '/api/placeholder/300/300', description: 'Fun cartoon design case' },
  { id: '78', name: 'Gradient Case', price: 579, category: 'Mobile Cases', image: '/api/placeholder/300/300', description: 'Modern gradient design' },
  { id: '79', name: 'Quote Phone Case', price: 679, category: 'Mobile Cases', image: '/api/placeholder/300/300', description: 'Inspirational quote case' },
  { id: '80', name: 'Business Logo Case', price: 829, category: 'Mobile Cases', image: '/api/placeholder/300/300', description: 'Professional branding case' },
];

export const featuredProducts = products.slice(0, 8);