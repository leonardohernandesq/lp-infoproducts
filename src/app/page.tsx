'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FiChevronsDown } from 'react-icons/fi';

export default function Home() {
  const [colorScheme, setColorScheme] = useState('light');

  useEffect(() => {
    const savedColorScheme = localStorage.getItem('colorScheme');
    if (savedColorScheme) {
      setColorScheme(savedColorScheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setColorScheme('dark');
    }
  }, []);

  function toggleColorScheme (){
    const newColorScheme = colorScheme === 'light' ? 'dark' : 'light';
    setColorScheme(newColorScheme);
    localStorage.setItem('colorScheme', newColorScheme);
  };

  return (
    <main className='containerMain'>
      {/* <button onClick={toggleColorScheme} className="p-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600">Alternar Esquema de Cores</button> */}
      <header className='flex justify-center items-center'>
        <Image src={'/logowhite.png'} alt='Logo com gráfico subindo da InvestSmart' width={140} height={60} className='logo'/>
      </header>

      <section className={`banner-container`}>
        <div className='limit-width'>
          <h1>Investimentos Inteligentes. Resultados Confiáveis</h1>
          <a href="#main"><FiChevronsDown size={40} className='icon-down'/></a>
        </div>
      </section>
    
      <section id='main' className='limit-width'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti non suscipit, dolore quis error, quos earum eum maiores dolor assumenda id fugit eaque ducimus molestias hic ab quod nemo facilis?
        Sapiente culpa qui perspiciatis placeat velit minus, commodi id odit accusantium amet vitae provident doloremque eum dolorum officiis inventore consequuntur iure distinctio quisquam earum? Eius rerum vel doloremque officiis facilis!
        Recusandae quia error at tenetur facere quos odio. Similique ex aut placeat ullam expedita fugiat ipsam est! Ducimus voluptatem, tempore exercitationem consectetur recusandae et sapiente fugit, animi libero corrupti pariatur!
        In architecto iste nihil commodi reiciendis possimus quas nobis sunt, laudantium, suscipit obcaecati distinctio soluta? Reprehenderit numquam sunt deleniti! Doloribus hic amet id neque quod pariatur quas provident voluptates doloremque?
        Odio explicabo enim eveniet non alias delectus placeat minima sint commodi sapiente optio magni qui repudiandae reprehenderit iste mollitia nulla saepe modi doloremque adipisci quos cumque, nesciunt sunt? Odio, ducimus?
        Unde, dolorum. Itaque ea nam veritatis iure excepturi, maiores modi soluta ullam dolorem saepe dicta veniam perspiciatis architecto eaque odio aspernatur animi magnam vitae quas quaerat. Incidunt odit rem et.
        Incidunt quo expedita perferendis corporis magnam totam ea delectus! Recusandae, tempora magnam porro sint nam ratione pariatur eum iure, obcaecati voluptate in doloribus dolorum accusantium enim ab hic fugiat voluptas.
        Facilis obcaecati ipsa quisquam eius consequatur ad corrupti, non autem temporibus in ipsum porro deleniti unde. Minima minus ducimus quasi ex eum quod omnis, nisi cupiditate labore? Nam, molestiae animi.
        Repudiandae perspiciatis neque veniam expedita molestiae sunt cum. Molestias, vitae ex! Modi, itaque. Repellat assumenda porro hic praesentium debitis dolorum, nihil accusamus libero doloremque vitae. Obcaecati sit amet dignissimos alias!
        Adipisci natus odio porro laboriosam officia laborum quod possimus quis maiores aut iste quas voluptatum exercitationem nostrum dolorem expedita in minima, omnis nulla necessitatibus incidunt. Provident ipsam architecto nihil sint?
        Molestias reprehenderit dolorem expedita similique doloremque explicabo. Amet quod officia, et dignissimos sequi doloremque maiores est molestiae, explicabo dolores nisi debitis possimus ipsum illum culpa blanditiis, illo quia rerum dolorum?
        Explicabo itaque perspiciatis, cum nulla assumenda cumque culpa ex et asperiores ab ipsa quis est autem totam eos consectetur ea! Porro doloribus eos unde dolorem et odio neque dolor aut?
        Aliquid vitae placeat odio nostrum libero earum rem asperiores? Accusamus unde quaerat tenetur pariatur, sint eos itaque maxime voluptate ipsam, inventore, facilis repudiandae sit? Minus adipisci odit nobis architecto veniam.
        Quidem rerum excepturi atque, reprehenderit tempora optio iure similique, corporis voluptatem, provident dolor! Debitis dolore voluptates ratione tempora quisquam, distinctio nemo eos consequuntur ad. Ratione non aliquid illum quis. Nulla?
        Perferendis et sint numquam laudantium, quisquam minus nesciunt ut accusamus quasi cupiditate quidem officia nihil pariatur voluptatum? Fugit est, rerum, quod aperiam illo deleniti molestias quos nam consequatur consectetur at?
        Earum harum pariatur ducimus, id perferendis laboriosam maxime itaque illum? Perspiciatis et ut aut, nisi in aperiam error itaque ipsa sequi earum vitae autem facere optio qui esse repellat unde.
        Quis officiis excepturi in veritatis debitis sunt exercitationem maxime perspiciatis tempora sapiente, architecto omnis distinctio illum nemo repudiandae dignissimos id consectetur nisi natus accusantium unde sit reiciendis cupiditate modi. Hic!
        Magnam minus tenetur voluptates excepturi libero ratione atque repudiandae porro, ad illum culpa autem iure harum quis tempore nihil! Veritatis debitis neque ad assumenda alias fugiat quaerat ipsa adipisci esse!
        Dolore necessitatibus tenetur quasi voluptatibus veniam optio consectetur id, quod nemo architecto placeat alias odit laborum! Consequatur excepturi provident beatae, quisquam magni quod, nesciunt eligendi corporis neque sint aspernatur dolorum.
        Cum ab optio magnam, ratione ex rerum inventore adipisci laborum. Deserunt neque iste minima? Dolore cum beatae nesciunt molestiae aliquid consequatur minima a corporis, porro rem doloremque deleniti expedita ea!
      </section>
    
    </main>
  );
}
