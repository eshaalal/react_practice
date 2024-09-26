const team1 = [
    { name: 'esha', age: 25, hours: 15, skills: ['First Aid', 'Cooking'] },
    { name: 'rahul', age: 35, hours: 30, skills: ['Driving', 'Teaching'] }
  ];
  
  const team2 = [
    { name: 'samay', age: 65, hours: 50, skills: ['First Aid', 'CPR'] },
    { name: 'karan', age: 40, hours: 18, skills: ['Organizing', 'First Aid'] }
  ];
  
  const allPeople = team1.concat(team2);
  
  const eligiblePeople = allPeople.filter(person => person.hours >= 20);

  const updatedPeople = eligiblePeople.map(person => ({
    ...person,
    hours: person.hours + 5
  }));
  
  const firstAidPerson = updatedPeople.find(person => person.skills.includes('First Aid'));
  
  const hasSenior = updatedPeople.some(person => person.age > 60);
  
  console.log('All People:', allPeople);
  console.log('Eligible People (20+ hrs):', eligiblePeople);
  console.log('Updated People:', updatedPeople);
  console.log('First person with First Aid skill:', firstAidPerson);
  console.log('Is there anyone older than 60:', hasSenior);
  