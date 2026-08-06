import React from 'react';

export const ProductVisualizer: React.FC = () => {
  return (
    <div className="w-full">
      <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-soft group">
        {/* Main Product Image */}
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwcmBY4XMl9RvhxT_ajgjv_H-y-rMnmSZs_Qd2Tda-DZZwSfd3L7aTWfe81EKVEk0RZKZkXk-vPFSLbQkYDpryu2bow1sI3X-tsjtGSnZV2IgV1FbFsqBr1kGmkRvrhjYYqXp3Lc5iLtTY3rdIz1atgHZNu64pYB_KBQ-NO7HoeGq7fe7ecUkoQ44wC59iYWa-bn7Fy1ZUr8H2bTYegx000FJRdB19rpN9XK9SncZcvw6i5UWdwE--EUcvC8xMTPyX0YOukWYIPBI"
          alt="Close up of a vibrant green matcha latte with latte art in a ceramic cup on a minimalist surface"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          data-alt="Premium matcha latte with perfect foam in a ceramic cup"
        />
        {/* Floating Detail Badge */}
        <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/40 dark:bg-black/40 backdrop-blur-md rounded-xl border border-white/50 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-bold mb-1 text-slate-900 dark:text-white drop-shadow-sm">Ceremonial Grade</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 drop-shadow-sm">Notes of umami, sweet cream, and fresh grass.</p>
            </div>
            <div className="flex gap-2">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary" title="Vegan">
                <span className="material-symbols-sharp text-sm">spa</span>
              </div>
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary" title="Gluten Free">
                <span className="material-symbols-sharp text-sm">grass</span>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-6 right-6">
          <div className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-glow uppercase tracking-wider">Best Seller</div>
        </div>
      </div>

      {/* Mini Gallery */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="aspect-square rounded-xl overflow-hidden cursor-pointer border-2 border-primary">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyDd7NKeXqzkS7OVd46B7uVGknsDp2erMcWhujmUDPeYc1ni4eGCUerM7CgntatbeKUv5B_CWBjeLPtqY2S1C0Gk5ElC2gexRFNPN6nW4QeyIxKuFJStr1zxjRQ-Fw2eHx0uAhnHckSR86_9rAXwaqQ8jwAzsIdjepkWZqpo9W37ARv9XENh10kXu1xfMwI78oP4-bwrLcHDdWYmst7t79-bRQl54MyCuiBB-oJaQwCRow9vhUmUqscfsBVjkkE3evvJYLhFwNsNY"
            alt="Fine green matcha powder texture"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-square rounded-xl overflow-hidden cursor-pointer border-2 border-transparent hover:border-gray-200 dark:hover:border-white/20 transition-all opacity-70 hover:opacity-100">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDq9leYlpowp12MAQATns9OYuxvnBKiSvMWgP1XfLiU44LMUmWlHSkZ7SSjOQdcYvh0UcoM3bcAhVo-ALjNMWKNZWSar8cxj2aji0LV_mAWAaiQS1RyLU7kxe_tk14fOZxEAtt6HVxlLwZhW5Ocycq98vXll87LEVYT7psZzPdvIo1VYSSziXggkmJ7IPHj5omYG15x8xsNSLnx517UC2p5a4XQXxzY4ktjzt_NH1VectVqbC4JTjDAuOKvXnYvazmGjOmxs08-QdE"
            alt="Pouring milk into matcha drink"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-square rounded-xl overflow-hidden cursor-pointer border-2 border-transparent hover:border-gray-200 dark:hover:border-white/20 transition-all opacity-70 hover:opacity-100">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTSl6s3Q_5qE78i8xo0Qybb0ZP8U66rDRmD6W6O6By28Hf1ORuXkI0pg9CrY5dtEhzFQFvTsy5xX6Dr_VkL--AczHWaUdXoYCEmKcVMHRqZ7pTzNBG4bdADL2Qtu_IAvbQOoLKjNVJ7Z8_k2RZSNN-G2JN3dvOoLIjwJOQ1yYxc6AqCeEslI4W6jLog5XaMe1yikJaJBO5qFOwP1gI_s223icchjsPKOyX5X82A7M-HxhHhrOOWjyBE1ToNyxggTkqgf4Fv4IKlXw"
            alt="Collagen powder scoop"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
