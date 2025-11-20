const calendarData = [
    {
        day: 1,
        title: "A Visita da Luz",
        story: "Naquela tarde calma, o vento balançava a cortina, trazendo um cheiro doce de flores do campo. De repente, o quarto de Maria mudou. Não havia lâmpadas, mas tudo se iluminou com um brilho suave, dourado e acolhedor. Um anjo, feito de pura serenidade, apareceu ali. Ele não assustava; pelo contrário, trazia uma paz que parecia abraçar os ombros dela. Com voz de brisa mansa, ele contou que uma missão linda estava para começar e que um bebê muito especial viria. O coração de Maria bateu forte, não de medo, mas de uma alegria quentinha, como se o sol tivesse nascido dentro do seu peito.",
        mission: "Anjo de Papel em Leque\n\nAnjo de Papel Dobrado\n1) Pegue 1 folha A4 e corte ao meio.\n2) Dobre cada uma das duas partes como um “leque” (vai e vem).\n3) Amarre um dos leques com uma fita bem na ponta. Corte o outro leque ao meio.\n4) Se quiser, arredonde as pontas dos leques.\n5) Cole as partes menores na parte maior para formar as asas.\n6) Faça a cabeça com um círculo de papel, EVA ou uma bolinha de papel amassado com fita.\n7) Cole a cabeça no centro das asas.\n8) Decorem com lã, glitter, adesivos ou canetinha."
    },
    {
        day: 2,
        title: "O Calor no Peito",
        story: "Depois que a luz intensa se foi, a casa parecia a mesma, mas Maria sentia tudo diferente. Havia um calorzinho constante dentro dela, como se uma pequena chama de vela estivesse acesa em seu coração. Cada barulho da rua, cada pássaro cantando parecia celebrar um segredo. Ela parou perto da janela, sentiu o vento tocar seu rosto e sorriu sozinha. Não sabia ainda como seria essa grande aventura, mas sentia que não estava sozinha. Tocou a barriga com carinho e respirou fundo. Às vezes, o coração da gente entende as coisas bonitas antes mesmo da cabeça conseguir explicar. O amor já estava crescendo ali.",
        mission: "Leite Quentinho da Conversa\n\nPreparem um leite morno (com canela, chocolate ou mel). Sentem-se juntos e conversem: \"O que deixa seu coração quentinho como esse leite?\". Vale abraço, beijo, ou brincar junto."
    },
    {
        day: 3,
        title: "A Parceria de José",
        story: "Maria sabia que precisava dividir aquele segredo. Numa tarde alaranjada pelo pôr do sol, contou tudo a José: a luz, a visita, a sensação de paz. José ouviu em silêncio. Seus olhos mostravam surpresa, mas logo se encheram de ternura. Ele não precisou de muitas explicações para sentir a verdade no olhar dela. Segurou firme a mão de Maria e disse com voz rouca e segura: \"Eu estou com você. Vamos caminhar juntos\". Maria sentiu o peso sair das costas. Ter alguém para dividir a estrada e segurar nossa mão faz qualquer caminho desconhecido parecer mais fácil e bonito.",
        mission: "A Arte do Apoio\n\nPeguem dois cabos de vassoura. Cada um segura uma das pontas de cada cabo. Coloquem uma almofada ou bolinha no meio. O desafio é andar passando por um caminho de obstáculos equilibrando a almofada ou bolinha juntos, sem deixar cair, mostrando como a cooperação é importante."
    },
    {
        day: 4,
        title: "Arrumando a Bagagem",
        story: "A notícia chegou: Maria e José precisariam viajar para longe, até Belém. Eles começaram a organizar o que levariam. Não tinham muitas coisas, mas cada item era escolhido com amor: um cobertor macio, um cantil com água fresca, um tecido guardado para o bebê. Enquanto dobravam as roupas, conversavam sobre a estrada, imaginando as paisagens. Maria pensava que a vida é uma grande viagem e que o mais importante não é o que levamos na mochila, mas quem está ao nosso lado. O essencial cabia ali: coragem, afeto e a certeza de que estavam prontos para partir.",
        mission: "Biscoitos de Viagem\n\nPreparem juntos uma receita simples de biscoitos ou um lanche especial (pode ser sanduíche cortado em formatos divertidos), embalem como se fossem para uma grande aventura e façam um passeio juntos, lembrando como é bom ter alguém ao nosso lado."
    },
    {
        day: 5,
        title: "O Longo Caminho Começa",
        story: "O sol estava nascendo quando Maria e José deram os primeiros passos rumo a Belém. A estrada à frente era comprida, cheia de pedrinhas soltas, galhos secos e poeira que subia. Mesmo assim, havia algo bonito naquele início de jornada: o som ritmado dos passos, o vento que mudava a cada curva e a sensação de que cada movimento tinha um propósito maior. Às vezes, Maria parava para respirar fundo e ganhar fôlego. Não era uma caminhada fácil, mas José estava sempre por perto, oferecendo apoio silencioso. A cada passo, lembravam que alguns caminhos são longos, mas levam a lugares especiais.",
        mission: "Trilha das Descobertas — Monte um caminho pela casa com almofadas e objetos. Em cada parada, a criança deve observar algo com os sentidos: uma textura, uma cor ou um som diferente."
    },
    {
        day: 6,
        title: "A Caixa da Coragem",
        story: "Enquanto caminhavam pela estrada, às vezes o céu ficava nublado e a luz do dia diminuía um pouco. Maria apertou o xale contra o corpo. Sentiu um friozinho na barriga — aquele medo do desconhecido. Mas José sorriu para ela, e aquele sorriso funcionou como um escudo. Maria percebeu que ter coragem não é deixar de sentir medo, mas seguir em frente mesmo com as pernas tremendo um pouquinho. Ela respirou fundo, ergueu a cabeça e continuou. E assim, passo a passo, ela aprendia a confiar no mistério do caminho, mesmo sem saber o que encontraria.",
        mission: "Caixa Misteriosa\n\nColoque um objeto (algo macio, áspero ou gelado) dentro de uma caixa de sapatos fechada (com um buraco para a mão). A criança deve colocar a mão e adivinhar o que é apenas pelo tato, exercitando a coragem de enfrentar o desconhecido."
    },
    {
        day: 7,
        title: "Luzes na Escuridão",
        story: "Quando a noite finalmente chegou, o caminho ficou profundo e silencioso. O céu estava escuro, mas milhares de pontinhos de luz brilhavam como pequenos sorrisos lá no alto. Maria se sentou perto de José para descansar, respirou fundo o ar fresco e percebeu como a noite também tem sua beleza única. A lua cheia parecia seguir a família, iluminando a estrada apenas o suficiente para que pudessem enxergar o próximo passo. O escuro não era assustador; era silencioso e calmo. Maria entendeu que, para vermos o brilho das estrelas, precisamos da escuridão da noite. Mesmo quando tudo parece escuro em nossa vida, sempre existe uma luzinha brilhando em algum lugar, guiando nossos passos com esperança.",
        mission: "Teatro de Sombras\n\nApaguem as luzes e usem uma lanterna (ou a lanterna do celular) contra uma parede lisa. Façam sombras com as mãos (pássaros, cães, coelhos) e brinquem com as formas que a luz cria no escuro. Usem a imaginação e criem histórias divertidas antes de dormir."
    },
    {
        day: 8,
        title: "A Semente da Esperança",
        story: "O dia seguinte nasceu com um vento levinho e fresco que parecia empurrar a família suavemente para frente. Maria sentia o bebê se mexer e isso sempre trazia uma onda de esperança nova. José observava o caminho com muita atenção, procurando sempre a melhor direção para eles. Mesmo quando surgiam pedras maiores ou trechos mais difíceis de atravessar, eles respiravam fundo e seguiam persistentes. Maria percebeu que a esperança não é apenas um brilho distante — é algo que cresce devagar dentro da gente, como um farol silencioso que nunca se apaga. Ela segurou a barriga com carinho e sussurrou: “Estamos quase lá… vamos juntos.”",
        mission: "A Vida na Janela\nMolhe um pedaço de algodão com água e coloque dentro de um saquinho plástico transparente (tipo zip lock), junto com 2 ou 3 grãos de feijão. Cole o saquinho com fita adesiva em uma janela onde bata sol. Assim, as crianças poderão acompanhar, dia após dia, a semente se abrindo, a raiz saindo e a vida acontecendo, exercitando a paciência e a esperança enquanto esperam o broto crescer."
    },
    {
        day: 9,
        title: "Tesouros do Caminho",
        story: "A paisagem da estrada mudava a cada novo dia de viagem. Às vezes era pura poeira, às vezes muitas pedras, e depois surgiam árvores baixas e campos abertos e verdes. Maria, curiosa, observava os detalhes. Viu uma pedra com formato de coração, uma folha vermelha caída e ouviu o canto de um pássaro azul. Cada parte do caminho tinha sua beleza única e escondida. José ajudava a encontrar os lugares mais seguros enquanto caminhavam sempre juntos. Mesmo cansados, eles brincavam de encontrar beleza onde ninguém mais via. A viagem ficava mais curta quando os olhos procuravam encanto. Aprenderam que o mundo está cheio de pequenos tesouros escondidos, esperando apenas um olhar atento para serem descobertos.",
        mission: "Caça à Natureza\n\nHoje a missão é encontrar: uma folha diferente, uma pedrinha bonita e um graveto. Vão até o jardim de casa, um parque ou uma praça para encontrar algo especial. Em casa, façam uma colagem ou um \"quadro\" com esses tesouros naturais."
    },
    {
        day: 10,
        title: "O Poder do Carinho",
        story: "Depois de tantas horas caminhando sob o sol, Maria começou a sentir o corpo realmente cansado. José logo percebeu isso no jeito como ela respirava e na forma como segurava a barriga para proteger o bebê. Então, decidiram parar um pouco para descansar à sombra. José massageou os pés cansados de Maria com cuidado. Maria limpou o suor da testa de José com um pano fresco. Não precisavam dizer nada; o carinho entre os dois fazia qualquer pausa ficar mais leve e doce. Aquele toque gentil recarregou as energias melhor que qualquer sono profundo. Descobriram que o afeto é um combustível mágico: quando cuidamos do outro, nós também ficamos mais fortes. O amor cura o cansaço e faz a gente querer continuar.",
        mission: "Spa da Família\n\nMomento de relaxamento. A criança faz uma massagem suave (pode usar creme) nas mãos ou pés do adulto, e depois o adulto faz na criança para descansar da \"viagem\". Coloquem uma música calma de fundo e relaxem juntos."
    },
    {
        day: 11,
        title: "Pausa para Nutrir",
        story: "Em um pequeno trecho abençoado com a sombra de uma grande árvore antiga, Maria e José fizeram uma pausa maior. Ali, Maria finalmente pôde respirar com calma, sentir o ar fresco no rosto e alongar o corpo cansado da caminhada. José ofereceu água fresca e ajudou a encontrar uma posição mais confortável para ela sentar. Cuidar do corpo era essencial para conseguirem continuar a viagem bem. Maria percebeu que aquele cuidado simples consigo mesma era também uma forma profunda de carinho com o bebê que carregava. Foi um momento de leveza que renovou todas as forças para seguir pelo caminho.",
        mission: "Piquenique na Sala\n\nEstendam uma toalha no chão da sala ou até mesmo num parque ou praça perto de casa. Sirvam frutas picadas, suco e sanduíches e façam um delicioso piquenique conversando sobre alimentos que dão força."
    },
    {
        day: 12,
        title: "Alegria das Pequenas Coisas",
        story: "Maria e José já estavam viajando há dias, mas o riso não faltava. Enquanto caminhavam, Maria passou a reparar intencionalmente nos pequenos detalhes: uma flor colorida nascendo na beira da estrada, o vento que mudava de direção brincando com os cabelos, o som relaxante de um riacho distante. Uma pequena lebre do deserto atravessou o caminho correndo e fez Maria gargalhar com seus pulos. José imitou o som de uma coruja e os dois riram juntos. Eram coisas simples, mas que traziam uma alegria inesperada ao coração. A alegria não estava na chegada, estava ali, no meio da poeira e do cansaço. Perceberam que a felicidade não é algo grande que a gente espera acontecer no fim; ela é feita de migalhas douradas espalhadas pelo dia. Sorrir deixava a mala mais leve e o caminho mais curto. O coração alegre é o melhor companheiro de viagem.",
        mission: "Banda da Cozinha\n\nVamos fazer música! Peguem colheres de pau, panelas (tambores) e potes com arroz (chocalhos). Criem um ritmo alegre juntos para celebrar a alegria das pequenas coisas. Cantem músicas de Natal ou criem uma de sua própria autoria. Vale marchar pela casa tocando!"
    },
    {
        day: 13,
        title: "O Som do Silêncio",
        story: "A noite caiu mais rápido do que Maria esperava naquele dia. O céu estava azul-escuro, quase preto, mas repleto de estrelas que pareciam piscas brilhantes espalhadas pelo alto. José preparou com zelo um pequeno espaço para que pudessem descansar seguros. Não havia barulho de cidade, nem de pessoas. Apenas o vento soprando nas folhas e os grilos cantando sua música noturna. Maria fechou os olhos e apenas escutou. O silêncio não era vazio; era cheio de paz. Ela sentiu que o momento da chegada estava perto. José, ao lado, também respirava calmo. Ficar em silêncio juntos era uma forma de oração sem palavras. A calma daquela noite preparava o coração deles para a grande maravilha que estava por vir.",
        mission: "O Jogo do Silêncio\n\nDesafiem-se a ficar 1 minuto (ou 30 segundos para crianças menores) em total silêncio, de olhos fechados. Depois, contem um para o outro quais sons \"escondidos\" vocês conseguiram ouvir (um carro longe, a geladeira, um pássaro, a respiração)."
    },
    {
        day: 14,
        title: "Luzes no Horizonte",
        story: "Depois de muito caminhar e esperar, as luzes de Belém finalmente apareceram brilhando à distância. Eram pequenas e tremeluzentes, mas enchiam o coração de Maria de uma emoção indescritível. A cada passo que davam, os sons da cidade ficavam mais próximos: vozes de pessoas, barulho de animais, o agito do dia começando a terminar. Maria estava exausta, mas a alegria pura de chegar renovava suas forças. José olhou para ela com imensa ternura e disse aliviado: “Conseguimos, chegamos”. Eles sabiam que ainda precisavam encontrar um abrigo para dormir, mas ver Belém ali diante deles já era uma grande vitória.",
        mission: "A Cidade de Luzes - Transforme caixinhas vazias (de remédio ou pasta de dente) nas casas de Belém. Recorte janelinhas e cole pedaços de papel celofane ou papel manteiga colorido pelo lado de dentro. Faça um pequeno furo na parte de trás de cada caixa para encaixar uma luzinha de pisca-pisca (ou organize-as na frente de uma lanterna). Ao apagar as luzes da sala, a cidade brilhará com janelas coloridas, celebrando a chegada da família ao seu destino."
    },
    {
        day: 15,
        title: "Procurando Lugar",
        story: "A cidade de Belém estava muito cheia de viajantes. Maria e José bateram em várias portas procurando lugar, mas o espaço era pouco e todas as casas pareciam ocupadas. Mesmo recebendo \"nãos\", cada pessoa que os atendia mostrava algum gesto simples de humanidade: um copo de água fresca, uma palavra amiga, um olhar de empatia. A noite se aproximava novamente, e Maria sentia uma pontinha de preocupação crescer. Mas José seguia procurando, passo a passo, com paciência infinita. Eles sabiam, lá no fundo, que um lugar especial apareceria na hora certa, mesmo que não fosse o palácio mais bonito.",
        mission: "Destralhe do Bem\n\nPara algo novo entrar, precisamos abrir espaço. Escolham juntos 3 brinquedos ou peças de roupa em bom estado que não usam mais para doar. Coloquem numa sacola bonita para entregar a quem precisa, assim como alguém ajudaria os viajantes."
    },
    {
        day: 16,
        title: "O Refúgio Simples",
        story: "Depois de tantas tentativas sem sucesso, um homem gentil finalmente ofereceu um pequeno estábulo nos fundos. Não era uma casa luxuosa, mas tinha espaço seguro, palha macia e animais que descansavam tranquilos. Maria sentiu o coração aquecer de gratidão. Às vezes, o lugar perfeito não é aquele que imaginamos nos sonhos, mas sim o que nos acolhe com verdade no momento certo. José ajeitou o espaço com todo cuidado, afastando palhas, trazendo água limpa e garantindo que Maria ficasse confortável. Ali, naquele cantinho tão simples e humilde, a história mais bonita do mundo estava prestes a acontecer.",
        mission: "Cine Cabana\n\nUsem lençóis e almofadas para fazer uma cabana na sala (o estábulo). Entrem todos lá dentro com pipoca e assistam juntos a um filme de Natal ou um desenho sobre amizade. Vale também apenas conversar ou ler alguns livros juntos aprovetaindo a companhia num espaço aconchegante."
    },
    {
        day: 17,
        title: "A Bondade Vizinha",
        story: "Enquanto eles preparavam o estábulo para a noite, algumas pessoas simples da cidade passaram por perto e ofereceram o que podiam para ajudar: um pedaço de pão fresco, um tecido limpo, um olhar sincero de bondade. Aqueles gestos pequenos de estranhos aqueciam a alma. Maria sorria agradecida. A bondade é uma linguagem que todo mundo entende. Ninguém ali tinha muito, mas o pouco que tinham, dividiam com alegria. O estábulo se encheu de generosidade humana. Maria percebeu que o bebê nasceria cercado não de ouro, mas da riqueza mais valiosa que existe: a solidariedade e o carinho das pessoas.",
        mission: "Buquê da Amizade - Vamos espalhar a beleza da natureza! Vão até o jardim ou uma praça e colham algumas flores, folhas verdes bonitas ou raminhos (sempre respeitando a natureza, pegando o que já caiu ou o que tem em abundância). Juntem tudo fazendo um pequeno buquê e amarrem com um barbante ou fita. A missão é entregar esse presente natural para um vizinho, porteiro ou alguém da família, como um gesto de carinho e gratidão, assim como os moradores de Belém fizeram."
    },
    {
        day: 18,
        title: "Os Guardiões da Natureza",
        story: "O ar naquela noite parecia diferente de todas as outras, como se o mundo inteiro estivesse prendendo a respiração em espera. Maria sentiu o bebê se mover suavemente, e José permaneceu firme ao lado dela, segurando sua mão com amor. Havia uma paz profunda preenchendo o estábulo, misturada a uma expectativa silenciosa e sagrada. O estábulo não estava vazio. Havia uma vaca mastigando devagar, um burrinho curioso e algumas pombas nas vigas do teto. Os animais pareciam entender que precisavam fazer silêncio e aquecer o ambiente. Eles não se assustaram com Maria e José; pelo contrário, chegaram perto para oferecer seu calor. A natureza toda parecia estar em sintonia, protegendo aquele momento. Maria fez carinho no burrinho que os carregou por tanto tempo. Havia uma harmonia perfeita entre as pessoas e os bichos, todos unidos pela mesma espera mágica.",
        mission: "Potes de Cheiro do Estábulo\nSepare três potinhos que você tenha em casa (com furos na tampa ou cobertos com um tecido fino) e coloque dentro de cada um:\nPote 1: Grama seca ou chá de camomila (para lembrar o cheiro da palha/feno);\n\nPote 2: Cravo ou canela em pau (para o cheiro da madeira do estábulo);\n\nPote 3: Casca de laranja ou limão (para o frescor da natureza).\n\nAntes de iniciar a leitura, peça para a criança cheirar os potes e tentar adivinhar o que tem dentro. Durante a história, ao ler sobre a vaca mastigando e o ambiente acolhedor, convide a criança a sentir os aromas novamente, imaginando que ela está sentada dentro do estábulo junto com os animais."
    },
    {
        day: 19,
        title: "A Grande Noite Chega",
        story: "O estábulo ficou ainda mais silencioso conforme a madrugada avançava. O ar estava calmo e parado, como se a natureza estivesse esperando o momento perfeito. José ajustou a palha mais uma vez, trouxe água fresca e fez o possível para que Maria estivesse plenamente confortável. Depois, ele acendeu uma pequena lamparina que iluminou o rosto sereno de Maria. Tudo estava pronto. Não havia barulho, pressa ou medo. Apenas uma certeza gigante de que o mundo estava prestes a mudar para melhor. Maria sentiu uma onda de gratidão profunda. Ela fechou os olhos e respirou a paz daquele instante. Era a calmaria sagrada que antecede os milagres. O tempo parecia suspenso, esperando o primeiro choro de vida.",
        mission: "Recorte algumas estrelas usando papel alumínio ou papel amarelo. Antes de chamar a criança, esconda-as em lugares inusitados da sala: embaixo da mesa, atrás da cortina ou no pé do sofá. Apague todas as luzes, deixando o ambiente bem escuro, e entregue uma lanterna para a criança. A missão dela é explorar a sala com a luz, iluminando o estábulo como José fez, para caçar e encontrar todas as estrelas escondidas que anunciam a chegada do bebê."
    },
    {
        day: 20,
        title: "A Estrela Guia",
        story: "De repente, no céu escuro, uma estrela brilhou com uma intensidade que nunca tinham visto antes. Sua luz era prateada, intensa e pulsante. Ela era tão grande que parecia apontar um dedo de luz direto para o estábulo. Pastores que estavam nos campos olharam para cima, maravilhados. Maria sentiu no coração que aquele brilho era um sinal claro de que o grande momento estava muito próximo. José também percebeu a mudança e saiu por um instante para observar melhor o céu. Era uma luz tão forte, bonita e guia, que parecia orientar todos os corações atentos naquela noite mágica. A estrela anunciava, em silêncio, que algo transformador estava chegando ao mundo.",
        mission: "Projetor de Estrelas\n\nPeguem um rolo de papel higiênico, cubram uma ponta com papel filme (plástico) e desenhem uma estrela nele com canetinha permanente. Apaguem a luz, coloquem uma lanterna dentro do rolo e projetem a estrela na parede."
    },
    {
        day: 21,
        title: "O Caminho Iluminado",
        story: "Lá no alto do céu aveludado, a estrela mais brilhante começou a piscar, como um convite gentil aos pastores que descansavam nos campos. Guiados por essa luz mágica e pela intuição, eles caminharam devagar pela relva, trazendo não apenas presentes, mas melodias suaves e sorrisos sinceros. O silêncio da noite foi preenchido por uma alegria simples e contagiante. Maria ouviu os passos macios se aproximando e sentiu seu coração aquecer de gratidão. O pequeno estábulo, antes quieto, transformou-se em um ponto de encontro luminoso, onde o céu abraçava a terra. Cada novo visitante que chegava pela estrada de luz trazia seu carinho, afastando o frio lá fora e transformando aquele momento em um abraço coletivo, repleto de amor e harmonia.",
        mission: "As Ovelhinhas dos Pastores - Transforme um rolo de papel higiênico vazio em uma ovelhinha! Passem cola em volta do rolo e cubram com bastante algodão para ficar bem fofinho. Depois, recortem o rostinho da ovelha (usem o molde no arquivo anexo ou desenhem vocês mesmos) e colem no rolinho. Enquanto montam o rebanho, coloquem músicas de Natal para tocar!"
    },
    {
        day: 22,
        title: "Presentes Invisíveis",
        story: "Naquela noite tão especial, Maria e José começaram a imaginar tudo o que gostariam de oferecer ao bebê que estava para chegar a qualquer momento. Não eram coisas compradas em lojas — eram presentes valiosos que moram na alma: amor infinito, cuidado, alegria sincera e esperança. Maria sorriu ao perceber que os melhores presentes do mundo não cabem nas mãos, mas transbordam no coração. Esses eram os verdadeiros presentes que o bebê receberia. José prometeu proteger, e Maria prometeu amar incondicionalmente. Naquela noite, entenderam que o melhor presente que podemos dar a alguém é a nossa própria presença e o nosso melhor sentimento.",
        mission: "Mala da Imaginação\n\nPeguem uma mala ou bolsa vazia. A brincadeira é colocar \"presentes invisíveis\" dentro. Façam a mímica de pegar algo e digam: \"Eu estou colocando um abraço de urso\", \"Eu coloco muita risada\", \"Eu coloco coragem\". Enquanto colocam cada um dos \"presentes\", aproveitem para \"entregar cada um deles um ao outro.\""
    },
    {
        day: 23,
        title: "Enviando Amor",
        story: "Pouco antes da grande noite, Maria parou para pensar em todas as pessoas queridas que já tinham cruzado seu caminho ao longo da vida. Sentiu uma onda imensa de gratidão por cada uma delas. José também lembrou com carinho de amigos e familiares distantes e percebeu como cada encontro faz diferença na nossa história. Eles decidiram ali que, quando o bebê nascesse, queriam espalhar esse amor acumulado para todos, perto ou longe. José segurou a mão dela e juntos fizeram um pensamento bom para toda a humanidade. O Natal é isso: quando o amor nasce em nós, ele precisa viajar e tocar o coração de quem está longe.",
        mission: "Mensagem do Coração\n\nGravem um vídeo curto ou um áudio carinhoso para os avós, tios ou padrinhos dizendo o quanto eles são importantes. Enviem essa mensagem de amor digital para quem está longe."
    },
    {
        day: 24,
        title: "O Nascimento do Amor",
        story: "A madrugada estava profunda e silenciosa quando, finalmente, o bebê nasceu. O estábulo inteiro parecia sorrir e celebrar aquele momento. Os animais ficaram ainda mais tranquilos, o ar ficou leve e doce, e a estrela no céu brilhava com força total. Maria segurou o pequeno nos braços com ternura infinita, e José olhou para eles com os olhos cheios de lágrimas e emoção. A boa notícia se espalhou rápido como o vento, chegando aos pastores e viajantes distantes. O amor havia ganhado um rosto, um corpo e um nome. Jesus estava ali, e com ele, a promessa de que o amor sempre vence, todas as vezes. Feliz Natal!",
        mission: "Festa do Bebê\n\nFaçam um pequeno bolo (ou cupcake) e cantem \"Parabéns\" para Jesus. Celebrem o nascimento com alegria, abraços apertados em família e gratidão por estarem juntos nessa noite mágica."
    },
    {
        day: 25,
        title: "A Luz é Você",
        story: "O sol da manhã de Natal entrou pela janela com uma cor diferente, dourada e viva. O tempo de espera acabou! Jesus nasceu e agora a luz que a gente tanto procurou não está mais numa estrela distante, nem apenas na lamparina de José. Essa luz agora mora dentro da nossa casa e dentro de cada um de nós. Maria e José olharam para o bebê e depois olharam para o mundo lá fora. Tudo parecia renovado. A promessa foi cumprida: o amor venceu. Hoje, não precisamos fazer malas, nem caminhar longe. Hoje é dia de ficar, de abraçar e de deixar essa alegria transbordar. O melhor presente já foi entregue: a vida juntos. Que a luz deste dia brilhe no seu coração o ano inteiro.",
        mission: "O Café da Manhã da Luz - Não há tarefas hoje, apenas celebração! Preparem um café da manhã gostoso em família (com as sobras do bolo ou dos biscoitos!). Reúnam à mesa (ou no chão da sala) todas as coisas que vocês criaram durante a jornada: o anjo, a ovelhinha, a cidade de luzes, o buquê, o desenho. Olhem para tudo o que construíram juntos e digam um para o outro: \"Obrigado por caminhar comigo. Feliz Natal!\""
    }
];
