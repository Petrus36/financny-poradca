const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const fakeSubmissions = [
  {
    financialLiteracy: 'Dobrá',
    products: JSON.stringify(['Bežný / sporiaci účet', 'Hypotéka / úver', 'Poistenie (život, auto, nehnuteľnosť)']),
    interests: 'Ako ušetriť na hypotéke',
    topics: JSON.stringify(['Ako ušetriť na hypotéke', 'Ako optimalizovať poistenia']),
    name: 'Martin',
    surname: 'Novák',
    phone: '+421 901 234 567',
    email: 'martin.novak@email.sk'
  },
  {
    financialLiteracy: 'Priemerná',
    products: JSON.stringify(['Bežný / sporiaci účet', 'Investície', '2. / 3. pilier']),
    interests: 'Ako zhodnotiť úspory/investície',
    topics: JSON.stringify(['Ako zhodnotiť úspory/investície', 'Ako zabezpečiť budúcnosť detí']),
    name: 'Anna',
    surname: 'Kováčová',
    phone: null,
    email: 'anna.kovacova@gmail.com'
  },
  {
    financialLiteracy: 'Skvelá',
    products: JSON.stringify(['Bežný / sporiaci účet', 'Hypotéka / úver', 'Investície', 'Poistenie (život, auto, nehnuteľnosť)', '2. / 3. pilier']),
    interests: 'Ako platiť menej na daniach',
    topics: JSON.stringify(['Ako platiť menej na daniach', 'Ako zhodnotiť úspory/investície']),
    name: 'Ján',
    surname: 'Horváth',
    phone: '+421 905 876 543',
    email: 'jan.horvath@outlook.com'
  },
  {
    financialLiteracy: 'Zlá',
    products: JSON.stringify(['Bežný / sporiaci účet']),
    interests: 'Ako mať zabezpečený príjem v prípade zdravotných problémov',
    topics: JSON.stringify(['Ako mať zabezpečený príjem v prípade zdravotných problémov', 'Ako optimalizovať poistenia']),
    name: 'Eva',
    surname: 'Baláž',
    phone: '+421 902 345 678',
    email: null
  },
  {
    financialLiteracy: 'Dobrá',
    products: JSON.stringify(['Bežný / sporiaci účet', 'Investície', 'Poistenie (život, auto, nehnuteľnosť)']),
    interests: 'Ako zabezpečiť budúcnosť detí',
    topics: JSON.stringify(['Ako zabezpečiť budúcnosť detí', 'Ako zhodnotiť úspory/investície']),
    name: 'Peter',
    surname: 'Svoboda',
    phone: '+421 907 123 456',
    email: 'peter.svoboda@yahoo.com'
  }
];

async function seedData() {
  try {
    console.log('🌱 Seeding fake form submissions...');
    
    for (const submission of fakeSubmissions) {
      await prisma.formSubmission.create({
        data: submission
      });
      console.log(`✅ Created submission for ${submission.name} ${submission.surname}`);
    }
    
    console.log('🎉 Successfully seeded 5 fake form submissions!');
  } catch (error) {
    console.error('❌ Error seeding data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedData();
