<script setup lang="ts">
const items = [
  {
    key: "episode-1",
    label: "L'Ombre du Passé",
    date: "2 septembre 2022",
    img: "https://m.media-amazon.com/images/S/pv-target-images/2520061e6dad539f1723a71fc4c18491201eeff38f0de8a4823f5d4dcfc2dae0._BR-6_AC_SX1920_FMwebp_.jpg",
    duration: "1 h 5 min",
    icon: "i-heroicons-information-circle",
    description:
      "Premier épisode de la saison. Galadriel est préoccupée par des indices suggérant le retour d'un mal ancien. Arondir fait une troublante découverte. Elrond se voit proposer un nouveau projet intrigant. Nori enfreint la règle fondamentale de la communauté des Piévelus.",
    anecdote: [
      {
        label: "1.",
        content:
          "La plupart des détails et explications ci-incluses sont extraits du 'Seigneur des Anneaux', et plus particulièrement du prologue 'Des Hobbits' et des appendices A à F. Le voyageur intrépide pourra ainsi découvrir de nouveaux horizons.",
      },
      {
        label: "2.",
        content:
          "Galadriel et son frère, Finrod Felagund, étaient tous deux des Hauts-elfes, ou Eldar, et enfants du roi Finarfin. (Appendice F)",
      },
      {
        label: "3.",
        content:
          "Galadriel était la plus noble des Hauts-elfes exilés, les Noldor, une branche des Eldar ayant quitté Valinor pour la Terre du Milieu. (Appendice F)",
      },
      {
        label: "4.",
        content:
          "Morgoth avait plusieurs noms, dont Seigneur des Ténèbres du Nord. Dans la région du Forodwaith, régnait un froid âpre et mordant. À ce jour, la neige y tombe toujours, malgré la chute de Morgoth. (Note de bas de page, appendice A)",
      },
      {
        label: "5.",
        content:
          "Pendant le Premier Âge, le Seigneur des Ténèbres créa une caricature des Ents, les trolls. (Livre III, chapitre 4) Les trolls des neiges présentent peu de différences avec ces derniers, si ce n'est qu'ils se sont vite adaptés au climat rude des royaumes du nord.",
      },
      {
        label: "6.",
        content:
          "Bien que peu de récits en fassent état, il fut une époque, avant leur unification en un seul peuple, où les hobbits étaient divisés en plusieurs branches, dont les Piévelus. Nomades, ces derniers vivaient dans les hautes terres et les collines. (Des Hobbits)",
      },
      {
        label: "7.",
        content:
          "À la fin du Premier Âge, Elrond, de la lignée des Peredhel ou encore semi-elfes, dut choisir entre une vie d'Eldar et une vie de mortel. (Appendice A)",
      },
      {
        label: "8.",
        content:
          "Malgré leur petite taille, les Piévelus restent légèrement plus grands que les générations suivantes de hobbits, qui ne dépassent pas les 1,20 mètre. Les Piévelus sont glabres, bruns de peau et vont nu-pieds. (Des Hobbits)",
      },
      {
        label: "9.",
        content:
          "En tant que dernier héritier des rois Noldor en exil, Gil-Galad fut reconnu Haut-roi des elfes de l'Ouest. (Appendice B)",
      },
      {
        label: "10.",
        content:
          "Valinor est la terre des Valar, les gardiens célestes du monde. Elle porte de nombreux noms, dont les Terres Immortelles, le Royaume Béni, Eldamar ou les Terres de l'Ouest. (Appendice A, etc.)",
      },
      {
        label: "10.",
        content:
          "Tous les humains ne se sont pas battus aux côtés des elfes pendant le Premier Âge. Pour certains, il s'agit des Jours Sombres, et peu de récits en font état. (Appendice B)",
      },
      {
        label: "11.",
        content:
          "Les elfes sylvains ou elfes des forêts se distinguent des Eldar. Ils vivent bien plus à l'est de la mer, dans des royaumes forestiers, tels que Vert-Bois-le-Grand. (Appendice B)",
      },
      {
        label: "12.",
        content:
          "En Terre du Milieu, le chemin des elfes Premiers-Nés et celui de leurs cadets, les humains, se sont séparés. (Livre IV, chapitre 5)",
      },
      {
        label: "13.",
        content:
          "Depuis les Havres Gris, ou Mithlond, les elfes font voile vers l'Ouest pour ne jamais retourner en Terre du Milieu. (Livre I, chapitre 2)",
      },
      {
        label: "14.",
        content:
          "Selon la légende, lorsque l'on navigue sur la Grande mer en direction du Royaume Béni, un doux parfum et des voix suaves enveloppent les navires elfiques. Puis le rideau gris de pluie se transforme en miroir d'argent et se retire pour révéler des rivages blancs et des paysages verdoyants sous une aube dorée. (Livre VI, chapitre 9)",
      },
    ],
    conceptArts: [
      "https://m.media-amazon.com/images/S/bts-images-prod/bts/assets/e132d1e4-2c7f-4baa-8844-b294120a67f8/0/e/2/0e231584-30af-408e-8902-3ff86cc9fa74/UAP_S1_E1_G3_P1_TheLordoftheRings_TheRingsofPower._SY900_SX1440_.jpg",
      "https://m.media-amazon.com/images/S/bts-images-prod/bts/assets/e132d1e4-2c7f-4baa-8844-b294120a67f8/8/9/2/8925bb80-bbf7-405c-b8c7-b4b9b3c0c379/UAP_S1_E1_G3_P2_TheLordoftheRings_TheRingsofPower._SY900_SX1440_.jpg",
      "https://m.media-amazon.com/images/S/bts-images-prod/bts/assets/e132d1e4-2c7f-4baa-8844-b294120a67f8/6/b/5/6b5e3f09-d2a6-41b5-be15-5fd4773fa588/UAP_S1_E1_G3_P3_TheLordoftheRings_TheRingsofPower._SY900_SX1440_.jpg",
      "https://m.media-amazon.com/images/S/bts-images-prod/bts/assets/e132d1e4-2c7f-4baa-8844-b294120a67f8/3/2/a/32aed5e8-b550-4fcf-85d7-62cd5a7793a9/UAP_S1_E1_G3_P4_TheLordoftheRings_TheRingsofPower._SY900_SX1440_.jpg",
      "https://m.media-amazon.com/images/S/bts-images-prod/bts/assets/e132d1e4-2c7f-4baa-8844-b294120a67f8/6/8/9/6899f410-8914-43c8-bf21-4d76fcc1792a/UAP_S1_E1_G3_P5_TheLordoftheRings_TheRingsofPower._SY900_SX1440_.jpg",
    ],
  },
  {
    key: "episode-2",
    label: "À la dérive",
    icon: "i-heroicons-arrow-down-tray",
    date: "2 septembre 2022",
    img: "https://m.media-amazon.com/images/S/pv-target-images/659a0a13d1add429575fd1af7e355deece6226f5c878b0410ed1c3e18155a75d._AC_SX1920_FMwebp_.jpg",
    duration: "1 h 7 min",
    description:
      "Galadriel trouve un nouvel allié ; Elrond est froidement reçu par un vieil ami ; Nori s'efforce d'aider un Étranger ; Arondir cherche des réponses tandis que Bronwyn prévient son peuple d'une menace.",
    anecdote: [
      {
        label: "1.",
        content:
          "La plupart des détails et explications ci-incluses sont extraits du 'Seigneur des Anneaux', et plus particulièrement du prologue 'Des Hobbits' et des appendices A à F. Le voyageur intrépide pourra ainsi découvrir de nouveaux horizons.",
      },
      {
        label: "2.",
        content:
          "La Terre du Milieu est une terre de musique : du bruissement des rivières aux voix des Ents et des elfes ménestrels, nains, humains ou semi-hommes. Les chansons sont partie intégrante de chaque culture et de la terre même.",
      },
      {
        label: "3.",
        content:
          "Étant donné leur petite taille, les semi-hommes qualifiait les hommes de 'Grandes Gens'. Leur capacité à s'esquiver prestement et silencieusement leur permettait de ne pas croiser leur chemin. (Des Hobbits)",
      },
      {
        label: "4.",
        content:
          "Eregion est le plus jeune royaume elfique, édifié à l'ouest des Monts Brumeux au début du Deuxième Âge par les Hauts-elfes Noldor, connus pour leur savoir-faire.",
      },
      {
        label: "5.",
        content:
          "Cette porte marque l'entrée ouest du royaume de Khazad-dûm. Y sont gravées des inscriptions en Cirth, l'alphabet runique inventé par les elfes, mais adapté pour les nains afin qu'ils puissent graver leur langue dans la pierre. (Appendice E)",
      },
      {
        label: "6.",
        content:
          "Les nains sont difformes et plus petits que les elfes et les hommes, mais ils sont robustes, travailleurs et amoureux de la pierre, des pierres précieuses, et de tout métal qui se travaille. (Appendice F)",
      },
      {
        label: "7.",
        content:
          "Malgré les difficultés de la vie itinérante et le manque de sécurité alimentaire, les semi-hommes n'en sont pas moins gourmands ou aventureux quant à leurs choix alimentaires. S'ils le pouvaient, ils mangeraient six repas par jour. (Des Hobbits)",
      },
      {
        label: "8.",
        content:
          "La Grande mer sépare la Terre du Milieu des Terres Immortelles et abrite en ses profondeurs de nombreuses créatures sans nom. (Livre III, chapitre 5)",
      },
      {
        label: "9.",
        content:
          "Les elfes et les nains ont toujours entretenu des relations très tendues. La rancune des nains remonterait même aux Jours Anciens. (Appendice F)",
      },
      {
        label: "10.",
        content:
          "Tout comme le reste de Khazad-dûm, la maison de Durin est taillée dans la roche de la montagne sous laquelle elle est nichée, et soutenue par des colonnes de pierre. L'or et les pierres précieuses sont utilisés en abondance, et de majestueuses lanternes tiennent l'obscurité à distance. (Livre II, chapitre 4)",
      },
      {
        label: "11.",
        content:
          "Les elfes suscitent la crainte et la méfiance chez les hommes de la Terre du Milieu, alors que ces derniers ignorent presque tout de leur espèce. (Livre IV, chapitre 5)",
      },
      {
        label: "12.",
        content:
          "L'armure d'Arondir évoque son appartenance à une garnison d'elfes sylvains et son amour pour la nature.L'anneau à son pouce porte cette inscription en sindarin : 'Que tes flèches sifflent'.",
      },
      {
        label: "13.",
        content:
          "Il existe différentes espèces d'orques, chacune possédant des caractéristiques bien précises. À l'origine, elles avaient été engendrées par le Seigneur des Ténèbres durant les Jours Anciens. (Appendice F)",
      },
      {
        label: "14.",
        content:
          "Malgré leur immortalité et leur robustesse à toute épreuve, les elfes peuvent quand même mourir de leurs blessures ou de causes brutales, comme la noyade.",
      },
      {
        label: "15.",
        content:
          "Les elfes vouent une vénération toute particulière aux étoiles et à Vala Elbereth (aussi connue sous le nom de Varda). Toutefois, ils ne sont pas les seuls à attribuer des constellations aux divinités, toutes les cultures de la Terre du Milieu le font aussi. (Livre II, chapitre 8)",
      },
    ],
  },
  {
    key: "episode-3",
    label: "Adar",
    icon: "i-heroicons-arrow-down-tray",
    date: "9 septembre 2022",
    img: "https://m.media-amazon.com/images/S/pv-target-images/99d20d6da10f023acd170de112e3254e42745d917838d254ec98128ba3838f34._AC_SX1920_FMwebp_.jpg",
    duration: "1 h 9 min",
    description:
      "Arondir se retrouve prisonnier. Galadriel et Halbrand explorent un royaume légendaire. Elendil se voit confier une nouvelle mission. Nori doit subir la conséquence de ses actes.",
    anecdote: [
      {
        label: "1.",
        content:
          "La plupart des détails et explications ci-incluses sont extraits du 'Seigneur des Anneaux', et plus particulièrement du prologue 'Des Hobbits' et des appendices A à F. Le voyageur intrépide pourra ainsi découvrir de nouveaux horizons.",
      },
      {
        label: "2.",
        content:
          "Autrefois esclaves du Seigneur des ténèbres, les orques sont connus pour réduire leurs propres semblables en esclavage et exploiter cruellement leurs ennemis prisonniers. (Livre VI, chapitre 2)",
      },
      {
        label: "3.",
        content:
          "La statue d'Eärendil le Marin domine le quai central de la capitale de Númenor. Semi-elfe et ancêtre de la lignée royale núménoréenne, il sauva la Terre du Milieu à l'époque des Jours Anciens. (Appendice A)",
      },
      {
        label: "4.",
        content:
          "Les Edain, ou ancêtres des Núménoréens, furent les premiers humains à s'aventurer à l'ouest de la Terre du Milieu. Ils s'allièrent aux elfes lors de la guerre contre Morgoth pendant le Premier Âge. (Appendice A)",
      },
      {
        label: "5.",
        content:
          "Les Núménoréens sont des marins chevronnés et possèdent de nombreux navires sur leur île, aussi appelée Elenna. Cependant, les Valar leur ont interdit de partir loin de leurs rivages, en quête des Terres Immortelles à l'Ouest. (Appendice F, appendice A)",
      },
      {
        label: "6.",
        content:
          "Une autre caractéristique des serviteurs des ténèbres : ils ne supportent pas la lumière du soleil. Bien que certains orques la supportent mieux que d'autres, ils l'exècrent tous et ne s'aventurent dehors que rarement en plein jour.",
      },
      {
        label: "7.",
        content:
          "Grands amoureux des arbres, les elfes sylvains aiment observer leur croissance à travers les siècles. Avec le temps, ils prétendent même pouvoir entendre leur voix et lire leurs pensées. (Livre III, chapitre 8)",
      },
      {
        label: "8.",
        content:
          "Les Núménoréens ont reçu une espérance de vie trois fois plus longue que celle de leurs cousins, les sous-hommes restés en Terre du Milieu.",
      },
      {
        label: "9.",
        content:
          "Elros, premier roi de Númenor, régna sous le nom de Tar-Minyatur. Semi-elfe, comme son frère Elrond, il renonça à son immortalité pour devenir un homme après que les Valar lui eurent donné le choix. (Appendice A)",
      },
      {
        label: "10.",
        content:
          "Les semi-hommes ont le goût des réjouissances. Le traditionnel Festival de la Moisson permet aux Piévelus de se préparer aux dures migrations à venir.",
      },
      {
        label: "11.",
        content:
          "Les Piévelus utilisent un système d'écriture pictographique à base de symboles et de tableaux pour noter les cycles naturels, informations essentielles à leurs futures migrations.",
      },
      {
        label: "12.",
        content:
          "Les Piévelus sont livrés à eux-mêmes dans le vaste monde. Vulnérables de par leur petite taille, ils sont incapables de repousser les nombreux dangers qui les guettent.",
      },
      {
        label: "13.",
        content:
          "Sadoc Terrier est à la tête de la caravane des Piévelus. Il les guide d'un havre à l'autre grâce à son livre spécial, transmis de génération en génération.",
      },
      {
        label: "14.",
        content:
          "L'amour des Núménoréens pour la mer se traduit dans tous les aspects de leur culture. Au centre de cette pièce jadis réaménagée en donjon se dresse une statue personnifiée de la mer.",
      },
      {
        label: "15.",
        content:
          "Les possessions des Piévelus se composent de biens dénichés ou fabriqués par leurs soins qu'ils transportent dans leur bien le plus précieux, leur charrette.",
      },
      {
        label: "16.",
        content:
          "Les ouargues, créatures semblables aux loups, ont rallié les rangs des Ténèbres aux côtés des orques. (Livre II, chapitre 4)",
      },
    ],
  },
  {
    key: "episode-4",
    label: "La Grande Vague",
    icon: "i-heroicons-arrow-down-tray",
    date: "16 septembre 2022",
    img: "https://m.media-amazon.com/images/S/pv-target-images/9e56f5a95bdce87f0d87d92855f035000af59e5d25d593f35e91dd792cb0ca3a._AC_SX1920_FMjpg_.jpg",
    duration: "1 h 11 min",
    description:
      "La foi de la Reine Régente Míriel est mise à l'épreuve ; Isildur se trouve à un carrefour ; Elrond découvre un secret ; Arondir reçoit un ultimatum ; Theo désobéit à Bronwyn.",
    anecdote: [
      {
        label: "1.",
        content:
          "La plupart des détails et explications ci-incluses sont extraits du 'Seigneur des Anneaux', et plus particulièrement du prologue 'Des Hobbits' et des appendices A à F. Le voyageur intrépide pourra ainsi découvrir de nouveaux horizons.",
      },
      {
        label: "2.",
        content:
          "Nimloth, l'arbre blanc de Númenor, est issu d'une pousse de l'un des Deux Arbres du Valinor, Galathilion, lui-même issu d'un fruit de Telperion, l'arbre légendaire qui baignait les Terres Immortelles de lumière. (Livre VI, chapitre 5)",
      },
      {
        label: "3.",
        content:
          "Au centre de l'île de Númenor se dresse une imposante montagne, le Meneltarma. (Appendice A)",
      },
      {
        label: "4.",
        content:
          "Le royaume de Númenor est le territoire le plus occidental des Terres Mortelles, et ses rivages à l'ouest donnent sur les Terres Immortelles. Avant leur expulsion, les elfes d'Eressëa comblaient les Numénoréens de cadeaux et partageaient leur savoir-faire. (Appendice A)",
      },
      {
        label: "5.",
        content:
          "Le territoire de Beleriand s'étendait à l'ouest de la Terre du Milieu actuelle, avant d'être détruit pendant le Premier Âge. Seul le royaume du Lindon en a réchappé. (Appendice A)",
      },
      {
        label: "6.",
        content:
          "Malgré leur malveillance et leur cruauté, les orques ne sont pas exempts de besoins primaires. Ils doivent se nourrir et s'abreuver au même titre que les autres créatures. Et s'ils n'ont d'autre choix que de consommer de la viande avariée et de l'eau sale, même leur perversité ne les sauvera pas d'une intoxication. (Livre VI, chapitre 1)",
      },
      {
        label: "7.",
        content:
          "Eärendil le Marin, père d'Elrond, traversa la Grande mer pour implorer l'aide des Valar. Son destin le conduisit à voguer sur la voûte céleste, symbolisant l'espoir pour les peuples opprimés par les forces des ténèbres. (Appendice A)",
      },
      {
        label: "8.",
        content:
          "Les nains vénèrent le Lac du Miroir, situé à proximité de l'entrée est de Khazad-dûm. Selon la croyance, Durin Ier y aurait aperçu son reflet coiffé d'une couronne d'étoiles. (Livre II, chapitre 4)",
      },
      {
        label: "9.",
        content:
          "À Khazad-dûm, l'exploitation minière relève plus de l'exploit sculptural que de la force brute. Un processus lent et méthodique permettant de révéler les secrets de la roche. (Livre III, chapitre 8)",
      },
      {
        label: "10.",
        content:
          "Les écussons arborés par Az-Pharazon sur sa tunique symbolisent les nombreuses guildes de Númenor. Chaque guilde est représentée par une crête et se spécialise dans un art ou une responsabilité civique.",
      },
      {
        label: "11.",
        content:
          "Les palantír furent façonnés par les Noldor au Valinor, voire par Fëanor lui-même. Objets de grand pouvoir, ils permettraient de voir au-delà des mers et de prédire l'avenir. L'étendue de leur pouvoir n'est basée que sur de simples hypothèses. (Livre III, chapitre 11)",
      },
      {
        label: "12.",
        content:
          "Les orques parlent le Noir Parler, une langue âpre, truffée de jurons et d'insultes. Elle fut spécifiquement conçue pour les serviteurs des ténèbres. (Appendice F)",
      },
      {
        label: "13.",
        content:
          "Les femmes-nains s'aventurant rarement en dehors de leurs royaumes, de folles rumeurs à leur sujet se sont répandues. (Appendice A)",
      },
      {
        label: "14.",
        content:
          "Durin était l'aîné des Sept Pères des nains et l'ancêtre de tous les rois Longues-barbes. Il était également surnommé Durin Trompe-la-mort, en raison de sa très longue espérance de vie pour un nain. (Appendice A)",
      },
      {
        label: "15.",
        content:
          "Le Seigneur des Ténèbres a toujours compté les hommes parmi ses rangs. Leur fierté les a rendus faciles à corrompre et dominer. (Livre II, chapitre 2)",
      },
      {
        label: "16.",
        content:
          "Le roi de Númenor était considéré par beaucoup comme un Fidèle. Il souhaitait que le royaume renoue avec ses racines elfiques d'antan, avec les Eldar et les Valar. Mais ses efforts se soldèrent par un échec et déclenchèrent une rébellion populaire. (Appendice A)",
      },
    ],
  },
  {
    key: "episode-5",
    label: "Séparations",
    icon: "i-heroicons-arrow-down-tray",
    date: "23 septembre 2022",
    img: "https://m.media-amazon.com/images/S/pv-target-images/a54eea43cb97a75e3f1d2c57bd6fe7a16559fbbd00509c5b183bf918f7d97b43._AC_SX1920_FMjpg_.jpg",
    duration: "1 h 12 min",
    description:
      "Nori doute de son instinct ; Elrond s'éfforce de rester fidèle à son serment ; Hallbrand envisage son destin ; Les hommes des Terres du Sud se préparent à l'attaque.",
    anecdote: [
      {
        label: "1.",
        content:
          "La plupart des détails et explications ci-incluses sont extraits du 'Seigneur des Anneaux', et plus particulièrement du prologue 'Des Hobbits' et des appendices A à F. Le voyageur intrépide pourra ainsi découvrir de nouveaux horizons.",
      },
      {
        label: "2.",
        content:
          "Les semi-hommes ne portent pas de chaussures, leurs pieds ayant la plante dure comme du cuiret étant revêtus d'un épais poil frisé. Ils peuvent résister à tout type de terrain. (Des Hobbits)",
      },
      {
        label: "3.",
        content:
          "L'aisance d'Adar en plein jour trahit ses origines elfiques. Il possède le don d'immortalité et la capacité à supporter la lumière du soleil. Ses progénitures, les orques, portent des capes qui les protègent des rayons.",
      },
      {
        label: "4.",
        content:
          "À Númenor, la connaissance se transmet d'une génération à l'autre par le biais de livres, et non pas de rouleaux. À l'origine, les Núménoréens écrivaient en langue elfique, le tengwar, avant d'adopter définitivement leur propre système d'écriture.",
      },
      {
        label: "5.",
        content:
          "Les loups affamés de la Terre du Milieu représentent une menace terrifiante pour les Piévelus. Ces derniers sont en effet impuissants face à de tels prédateurs, leurs techniques de camouflage ne leur permettant pas de leur échapper.",
      },
      {
        label: "6.",
        content:
          "Az-Pharazon est le cousin de Míriel et le neveu du roi actuel. À Númenor, selon la loi, l'aîné des enfants du roi, quel que soit son sexe, est l'héritier du trône. (Appendice A)",
      },
      {
        label: "7.",
        content:
          "Le royaume forestier du Lindon longe l'estuaire du fleuve Lhûn et borde la mer. Il s'intègre parfaitement à la nature. (Appendice B)",
      },
      {
        label: "8.",
        content:
          "Sauron mis à part, les Balrogs étaient les serviteurs les plus dangereux de Morgoth. Démons de feu, ils étaient même craints par les elfes. (Livre II, chapitre 7)",
      },
      {
        label: "9.",
        content:
          "Les habitants de Númenor savent mettre leur environnement à profit. Ils ont réussi à aménager un réseau de voies navigables au sein même de la ville, leur permettant de garder les bateaux à proximité.",
      },
      {
        label: "10.",
        content:
          "La capitale de Númenor est une ville plus verticale qu'horizontale. Les exploits des Edain reposent sur les fondations que les elfes les ont aidés à bâtir. Mais leur quête permanente de progrès les pousse à vouloir constamment remplacer ces fondations.",
      },
      {
        label: "11.",
        content:
          "L'absence de nains ou d'elfes-forgerons d'Eregion à Númenor n'empêcha pas le royaume de connaître de grandes avancées représentant l'apogée des prouesses humaines. Plus tard, leurs édifications en Terre du Milieu évoqueront plus l'œuvre de géants ayant sculpté les entrailles même de la terre que celle de simples humains. (Livre V, chapitre 1)",
      },
      {
        label: "12.",
        content:
          "Sous la domination des Ténèbres, les hommes ont fini par céder et vénérer le Mal, séduits par le pouvoir et la connaissance qu'il offrait. (Livre V, chapitre 10)",
      },
      {
        label: "13.",
        content:
          "La tour de guet d'Ostirith, associée depuis longtemps aux elfes qui la contrôlent, avait néanmoins été construite par des partisans humains de Morgoth. Depuis cette tour, les elfes espèrent pouvoir détecter tout signe avant-coureur du Mal. Cependant, on murmure que la tour elle-même serait toujours contaminée par les ténèbres de l'époque.",
      },
      {
        label: "14.",
        content:
          "Aulë, souvent évoqué par les nains, est le créateur de ces derniers. On dit que sa flamme brûle toujours dans leur cœur. (Appendice F)",
      },
      {
        label: "15.",
        content:
          "L'arsenal du royaume de Númenor reflète le monde qui les entoure : leurs armures sont composées d'écailles, telles des créatures marines, leurs manches d'épée parés de chevaux et leurs casques ornés de crins de cheval.",
      },
    ],
  },
  {
    key: "episode-6",
    label: "Udûn",
    icon: "i-heroicons-arrow-down-tray",
    date: "30 septembre 2022",
    img: "https://m.media-amazon.com/images/S/pv-target-images/c93ab97d0530dcc82c07ad1c17277c0d5ffe57f163a90cc10c990c3c38042de6._AC_SX1920_FMjpg_.jpg",
    duration: "1 h 9 min",
    description: "Adar et son armée marchent sur Ostirith...",
    anecdote: [
      {
        label: "1.",
        content:
          "La plupart des détails et explications ci-incluses sont extraits du 'Seigneur des Anneaux', et plus particulièrement du prologue 'Des Hobbits' et des appendices A à F. Le voyageur intrépide pourra ainsi découvrir de nouveaux horizons.",
      },
      {
        label: "2.",
        content:
          "Le concept de 'fraternité' est inconnu aux orques. Lorsqu'ils sont livrés à eux-mêmes, ils s'attaquent les uns les autres et se divisent en hordes distinctes. (Appendice F)Les dissensions internes sont fréquentes, ou le seraient sans le commandement d'Adar, qui nourrit de plus grands desseins pour ses progénitures.",
      },
      {
        label: "3.",
        content:
          "Les elfes ont une vue très perçante qui leur permet de voir à des lieues. (Livre III, chapitre 2)",
      },
      {
        label: "4.",
        content:
          "Certains méfaits de l'ennemi ne peuvent être défaits par le fer seul, surtout en territoire humain, tel le village de Tirharad. (Livre I, chapitre 2)",
      },
      {
        label: "5.",
        content:
          "Lorsqu'elles sont plantées et entretenues, les graines d'Alfirin éclosent et donnent de jolies fleurs. (Livre V, chapitre 9)",
      },
      {
        label: "6.",
        content:
          "Les orques ont beau être des créatures des ténèbres, leur vision nocturne n'en est pas meilleure. Ils sont forcés d'utiliser des torches. (Livre IV, chapitre 10)",
      },
      {
        label: "7.",
        content:
          "Les orques ont le sang noir et différent de celui des autres espèces. (Livre III, chapitre 5)",
      },
      {
        label: "8.",
        content:
          "Bien que les elfes ne puissent mourir de maladie, un soldat comme Arondir sait comment soigner ses blessures.",
      },
      {
        label: "9.",
        content:
          "Le chant de guerre des orques, 'Nampat', signifie 'mort' en Noir Parler.",
      },
      {
        label: "10.",
        content:
          "Malgré l'absence de batailles depuis de nombreuses années, la bravoure et la puissance des Núménoréens restent sans égal. (Livre II, chapitre 2)",
      },
      {
        label: "11.",
        content:
          "Les siècles de douleur et de violence ont usé et marqué Adar et son armure.",
      },
      {
        label: "12.",
        content:
          "Morgoth n'étant pas capable de créer, il ne pouvait que corrompre et torturer des créatures existantes. Les orques ne sont qu'une mauvaise caricature des elfes. (Livre VI, chapitre 1)",
      },
      {
        label: "13.",
        content:
          "En Noir Parler, 'Uruk' signifie 'orque'. Cependant, ce terme fait souvent référence aux orques les plus larges et féroces. 'Orque' est surtout utilisé par les autres espèces pour désigner les serviteurs des ténèbres. (Appendice F)",
      },
      {
        label: "14.",
        content:
          "Les Terres du Sud ont d'abord été envahies par Morgoth et ses serviteurs des ténèbres, puis surveillées par les elfes pendant des siècles. Elles n'ont pas été un royaume souverain depuis plus d'un Âge.",
      },
      {
        label: "15.",
        content:
          "Númenor était aussi appelé Ouistrenesse. La Terre du Milieu compte une myriade de langues, et une même chose peut être désignée par des noms divers et variés. (Appendice F)",
      },
    ],
  },
  {
    key: "episode-7",
    label: "Séparations",
    icon: "i-heroicons-arrow-down-tray",
    date: "7 octobre 2022",
    img: "https://m.media-amazon.com/images/S/pv-target-images/45c0dbd21425875325e3da87bbdcfbcab2f7e5839a38fd91f1f88428a440bc48._AC_SX1920_FMjpg_.jpg",
    duration: "1 h 12 min",
    description:
      "Les survivants d'un cataclysme essaient de se mettre en sécurité. Les Piévelus affrontent le mal. Durin est déchiré entre amitié et devoir. Adar envisage un nouveau nom...",
    anecdote: [
      {
        label: "1.",
        content:
          "La plupart des détails et explications ci-incluses sont extraits du 'Seigneur des Anneaux', et plus particulièrement du prologue 'Des Hobbits' et des appendices A à F. Le voyageur intrépide pourra ainsi découvrir de nouveaux horizons.",
      },
      {
        label: "2.",
        content: "La Montagne du Destin porte le nom d'Orodruin. (Appendice A)",
      },
      {
        label: "3.",
        content:
          "D'antan, le Bosquet servit de refuge à certains Grandes Gens qui plantèrent les jardins désormais utilisés par les Piévelus.",
      },
      {
        label: "4.",
        content:
          "Les nains sont réticents à enseigner leur langue, le khuzdul, même à leurs amis. Secret jalousement gardé, cette langue n'est parlée que par peu d'étrangers. (Appendice F)",
      },
      {
        label: "5.",
        content:
          "Les rois de Khazad-dûm ont tous porté le nom de Durin et sont tous des héritiers directs de Durin Ier Trompe-la-Mort, qui s'est réveillé pendant les Jours Anciens. (Appendice A)",
      },
      {
        label: "6.",
        content:
          "Les nuages de cendres que crache la Montagne du Destin obscurcissent le ciel, mais aussi les cœurs. (Livre V, chapitre 4)",
      },
      {
        label: "7.",
        content:
          "Vert-Bois-le-Grand est la plus grande forêt occidentale en Terre du Milieu.",
      },
      {
        label: "8.",
        content:
          "Celeborn était un parent du roi elfe du Premier Âge, Thingol de Doriath. (Appendice B)La dernière fois qu'on l'aperçut, il partait en guerre pour ne jamais en revenir. On ignore ce qu'il est advenu de lui.",
      },
      {
        label: "9.",
        content:
          "Parmi la multitude d'orques qui existent, certains sont dotés d'un odorat développé, faisant d'eux de fins pisteurs. (Livre VI, chapitre 2)",
      },
      {
        label: "10.",
        content:
          "À Khazad-dûm, le filon de mithril s'enfonce plus profondément dans les ténèbres des montagnes qu'aucun autre minerai. (Livre II, chapitre 4)",
      },
      {
        label: "11.",
        content:
          "En plus de son nom, le prince Durin porte une crête dorée autour du cou pour signifier son appartenance à la lignée royale de Khazad-dûm.",
      },
      {
        label: "12.",
        content:
          "On raconte que des hommes ont appris à invoquer la puissance des Ténèbres, une magie sans commune mesure avec l'art enchanteur des elfes, dénué de malveillance ou tromperie.",
      },
      {
        label: "13.",
        content:
          "Hantés par leur mortalité, les Núménoréens cultivent des traditions centrées autour de la mort. Leurs tombes sont souvent plus splendides que leurs maisons, et ils semblent être plus attachés aux noms de leurs ancêtres qu'à ceux de leurs propres enfants. (Livre IV, chapitre 5)",
      },
      {
        label: "14.",
        content:
          "Malgré des siècles d'itinérance, les Piévelus, qui ne vivent pas encore dans des trous, ne se sont jamais déplacés sans leurs charrettes. S'ils venaient à s'en séparer, leur mode de vie en serait complètement bouleversé.",
      },
      {
        label: "15.",
        content:
          "Pelargir fut fondée au cours de l'âge d'or núménoréen, puis abandonnée lorsque le royaume se replia sur lui-même.",
      },
      {
        label: "16.",
        content:
          "La forge est le cœur du foyer d'un nain. Celle de Durin en est un parfait exemple, elle seyait à son statut de Prince. Le nain y travaille non seulement les métaux, mais y vénère aussi Aulë.",
      },
    ],
  },
  {
    key: "episode-8",
    label: "Alliés",
    icon: "i-heroicons-arrow-down-tray",
    date: "14 octobre 2022",
    img: "https://m.media-amazon.com/images/S/pv-target-images/44bd0cc5a87ed65763c48d1c1c396ea5a6eee602ff3bf82679be055298830332._AC_SX1920_FMjpg_.jpg",
    duration: "1 h 12 min",
    description:
      "Dernier épisode de la saison. De nouvelles alliances sont forgées...",
    anecdote: [
      {
        label: "1.",
        content:
          "La plupart des détails et explications ci-incluses sont extraits du 'Seigneur des Anneaux', et plus particulièrement du prologue 'Des Hobbits' et des appendices A à F. Le voyageur intrépide pourra ainsi découvrir de nouveaux horizons.",
      },
      {
        label: "2.",
        content:
          "Tandis que le royaume de Lindon s'harmonise élégamment avec la nature, Eregion cherche avant tout à l'intégrer à sa vision grandiose : recréer la grandeur du Valinor et des grandes cités détruites durant le Premier Âge.",
      },
      {
        label: "3.",
        content:
          "La forge de Celebrimbor est avant tout fonctionnelle. Cependant, elle intègre aussi quelques éléments naturels rappelant le houx, plante homonyme d'Eregion. Le soufflet est alimenté par des mécanismes récemment fournis par les nains.",
      },
      {
        label: "4.",
        content:
          "Des rouleaux elfiques, ou influencés par les elfes, sont conservés dans la tour du roi. Cette dernière renferme des objets anciens datant du Premier Âge et du temps des héros Edain.",
      },
      {
        label: "5.",
        content:
          "Gil-Galad a pour arme de prédilection une lance nommée Aeglos. Un avertissement en Sindarin à ses ennemis est inscrit sur la garde. (Livre II, chapitre 2)",
      },
      {
        label: "6.",
        content:
          "Rhun est une vaste terre située à l'est de la Terre du Milieu. Ses territoires s'étendent bien au-delà des limites connues. (Appendice A)",
      },
      {
        label: "7.",
        content:
          "Les semi-hommes ont le regard perçant et la main sûre. Quand ils se baissent pour se saisir d'un projectile, même les bêtes sauvages ont la présence d'esprit de se mettre à couvert. (Des Hobbits)",
      },
      {
        label: "8.",
        content:
          "Les navires Numénoréens comptent parmi les plus belles réussites de l'humanité. Adaptés aux longs voyages en mer, ils sont manœuvrés par des navigateurs d'exception, les Edain.",
      },
      {
        label: "9.",
        content:
          "Le monde des ombres et le monde des vivants cohabitent en Terre du Milieu et au-delà. Seuls des êtres dotés d'aptitudes particulières peuvent accéder au royaume des ombres.",
      },
      {
        label: "10.",
        content:
          "La dague de Finrod est sertie d'or et d'argent, métaux précieux symbolisant les deux arbres du Valinor qui baignaient les Terres Immortelles de leur lumière dorée et argentée durant les Jours Anciens.",
      },
      {
        label: "11.",
        content:
          "Au début, rien n'est mauvais. Même Sauron ne l'était pas. Mais le Mal corrompt, consume et se propage, tel Morgoth durant les Jours Anciens. (Livre II, chapitre 2)",
      },
      {
        label: "12.",
        content:
          "De nombreux récits ont circulé sur les magiciens, ou Istari, à des époques ultérieures, mais une part d'ombre demeure encore.",
      },
      {
        label: "13.",
        content:
          "Les Piévelus ont beau sillonner les vallées de l'Anduin d'un bout à l'autre, ils ne s'aventurent jamais hors des sentiers battus. Il est très rare de les voir s'éloigner du chemin.",
      },
      {
        label: "14.",
        content:
          "Les elfes forgèrent leurs trois Anneaux dans un but précis : favoriser l'entente, la création, la guérison et préserver la pureté. La force, la domination ou l'accumulation de richesses ne les intéressaient pas. (Livre II, chapitre 2)",
      },
    ],
  },
];

const carouselRef = ref();

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return;

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0);
    }

    carouselRef.value.next();
  }, 3000);
});

const { path } = useRoute();
const title = "Saison 1 des Anneaux de Pouvoir";
const description =
  "Saison 1 de la série du 'Le Seigneur des anneaux : Les Anneaux de Pouvoir'";
const img = "https://anneauxdepouvoir.fr/images/saison_1.jpg";
const url = `https://anneauxdepouvoir.fr${path}`;

useSeoMeta({
  description: description,
  ogDescription: description,
  twitterDescription: description,
  twitterImageAlt: title,
  ogImageAlt: title,
  twitterTitle: title,
  title: title,
  ogTitle: title,
  twitterImage: img,
  ogImage: img,
  ogImageUrl: img,
  ogUrl: url,
  twitterSite: "anneauxdepouvoir.fr",
  ogSiteName: "anneauxdepouvoir.fr",
});
</script>

<template>
  <div class="mt-14 py-3">
    <section class="py-10">
      <UContainer class="max-w-5xl">
        <UTabs :items="items" class="w-full">
          <template #default="{ item, index, selected }">
            <div class="flex items-center gap-2 relative truncate">
              <UIcon :name="item.icon" class="w-4 h-4 flex-shrink-0" />

              <UTooltip :text="`${item.label}`">
                <span class="truncate">{{ index + 1 }}. {{ item.label }}</span>
              </UTooltip>

              <span
                v-if="selected"
                class="absolute -right-4 w-2 h-2 rounded-full bg-primary-500 dark:bg-primary-400"
              />
            </div>
          </template>
          <template #item="{ item }">
            <UCard class="bg-gray-50">
              <template #header>
                <UBadge class="my-2" :label="item.label" />
                <UDivider
                  :label="`Sortie : ${item.date} | Durée : ${item.duration}`"
                />
                <p class="my-1 text-sm text-gray-500 dark:text-gray-400">
                  {{ item.description }}
                </p>

                <NuxtImg
                  v-if="item.img"
                  class="aspect-video w-full rounded-lg animate-fade-up animate-once animate-ease-in-out"
                  :alt="item.label"
                  :src="item.img"
                />
              </template>

              <UAccordion
                multiple
                default-open
                variant="ghost"
                size="sm"
                :items="item.anecdote"
              />

              <UCarousel
                ref="carouselRef"
                v-slot="{ item }"
                :items="item.conceptArts"
                :ui="{ item: 'basis-full' }"
                class="rounded-lg overflow-hidden"
                indicators
              >
                <img :src="item" class="w-full" draggable="false" />
              </UCarousel>

              <template #footer>
                <UAlert
                  icon="i-heroicons-chat-bubble-bottom-center-text"
                  color="primary"
                  variant="subtle"
                  title="Anecdotes"
                  description="Les anecdotes proviennt d'Amazon Prime Video"
                />
              </template>
            </UCard>
          </template>
        </UTabs>
      </UContainer>
    </section>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
