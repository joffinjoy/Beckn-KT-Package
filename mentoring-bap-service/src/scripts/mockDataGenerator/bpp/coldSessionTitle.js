'use strict'

const titles = [
	'Understanding and Implementing Universal Design for Learning',
	'Supporting Student Mental Health and Well-Being',
	'Teaching Strategies for Students with Attention Deficit Disorder',
	'Building Critical Thinking Skills in Early Childhood Education',
	'Teaching Strategies for Multilingual Classrooms',
	'Developing Effective Teacher Professional Development Programs',
	'Effective Assessment and Evaluation of Student Learning Outcomes',
	'Developing Effective Online Teaching Practices',
	'Building Resilience in Students Facing Adversity',
	'Supporting Students with Trauma and Adverse Childhood Experiences',
	'Innovative Approaches to Career and Technical Education',
	'Supporting Students with Learning Differences in Physical Education',
	'Creating Inclusive STEM Learning Environments',
	'Supporting Students with Chronic Illnesses in School',
	'Designing Effective K-12 Art Education Programs',
	'Supporting Students with Autism in Physical Education',
	'Building Effective Early Intervention Programs for Young Children',
	'Developing Effective Parenting Skills for New Parents',
	'Supporting Student Mental Health through Arts Education',
	'Understanding and Supporting Gifted and Talented Students',
	'Building Community and Positive Relationships through Service Learning',
	'Innovative Approaches to Music Education',
	'Understanding and Addressing Student Trauma in the Classroom',
	'Building Effective Mentoring Programs for Teachers',
	'Supporting Students with Hearing Loss in the Classroom',
	'Innovative Approaches to Teaching Physical Science',
	'Supporting Students with Anxiety Disorders in School',
	'Developing Effective Student Teacher Relationships',
	'Understanding and Supporting Students with Disruptive Behavior Disorders',
	'Developing Critical Reading Skills',
	'Strategies for Teaching Coding and Programming',
	'Innovative Approaches to Character Education',
	'Teaching Strategies for Non-Native Speakers of English',
	'Building Positive Teacher-Student Relationships',
	'Effective Assessment Strategies for Special Education',
	'Innovative Approaches to Differentiating Instruction',
	'Creating a Culturally Responsive Classroom',
	'Strategies for Integrating Technology into the Classroom',
	'Teaching Strategies for Students with Anxiety Disorders',
	'Building a Strong School Counseling Program',
	'Innovative Approaches to Teaching Literature',
	'Strategies for Supporting Student Mental Health',
	'Teaching Strategies for Gifted and Talented English Language Learners',
	'Building Positive School Discipline Practices',
	'Innovative Approaches to Teaching Art',
	'Strategies for Supporting LGBTQ+ Students',
	'Teaching Strategies for Students with Trauma Histories',
	'Building Effective School-Based Mental Health Services',
	'Innovative Approaches to Teaching Music',
	'Strategies for Supporting Students with ADHD in the Classroom',
	'Teaching Strategies for Students with Dysgraphia',
	'Building a Trauma-Informed Classroom',
	'Innovative Approaches to Teaching Foreign Languages',
	'Strategies for Supporting Students with Chronic Health Conditions',
	'Teaching Strategies for Students with Social Communication Disorders',
	'Building Effective School Library Programs',
	'Innovative Approaches to Teaching Drama',
	'Strategies for Supporting Students with Intellectual Disabilities',
	'Teaching Strategies for Students with Visual Processing Disorders',
	'Building Positive School Climate through Restorative Practices',
	'Innovative Approaches to Teaching Physical Education',
	'Strategies for Supporting Students with Chronic Absenteeism',
	'Teaching Strategies for Students with Executive Functioning Disorders',
	'Building Effective After-School Programs',
	'Innovative Approaches to Teaching Philosophy',
	'Strategies for Supporting Students with Traumatic Brain Injuries',
	'Teaching Strategies for Students with Selective Mutism',
	'Building a Positive School Environment through Positive Behavior Interventions and Supports',
	'Innovative Approaches to Teaching Environmental Education',
	'Strategies for Supporting Students with Speech Disorders',
	'Teaching Strategies for Students with Oppositional Defiant Disorder',
	'Building Effective School-Based Mental Health Teams',
	'Innovative Approaches to Teaching Health Education',
	'Strategies for Supporting Students with Eating Disorders',
	'Teaching Strategies for Students with Sensory Processing Disorders',
	'Building Effective School-Based Occupational Therapy Programs',
	'Innovative Approaches to Teaching Philosophy to Children',
	'Strategies for Supporting Students with Substance Abuse Issues',
	'Teaching Strategies for Students with Apraxia of Speech',
	'Building Effective Community Partnerships for School-Based Mental Health',
	'Innovative Approaches to Teaching Psychology',
	'Strategies for Supporting Students with Post-Traumatic Stress Disorder',
	'Teaching Strategies for Students with Motor Planning Disorders',
	'Building Positive School Climate through Mindfulness Practices',
	'Innovative Approaches to Teaching Business Education',
	'Strategies for Supporting Students with Obsessive-Compulsive Disorder',
	'Teaching Strategies for Students with Central Auditory Processing Disorder',
	'Building Effective School-Based Speech Therapy Programs',
	'Innovative Approaches to Teaching Yoga in Schools',
	'Strategies for Supporting Students with Reactive Attachment Disorder',
	'Teaching Strategies for Students with Developmental Coordination Disorder',
	'Building Effective School-Based Physical Therapy Programs',
	"Innovative Approaches to Teaching Women's Studies",
	'Strategies for Supporting Students with Intellectual Giftedness',
	'Strategies for Effective Communication with Parents and Guardians',
	'Differentiating Instruction for Diverse Learners',
	'Critical Thinking and Problem-Solving Skills for Students',
	'Fostering Positive Social and Emotional Development in Students',
	'Effective Classroom Leadership Strategies',
	'Teaching Strategies for Students with Learning Differences',
	'Strategies for Effective Classroom Discipline',
	'Building Strong Student-Teacher Relationships',
	'Creating a Safe and Inclusive Learning Environment',
	'Student-Centered Learning Strategies',
	'Strategies for Effective Teacher Collaboration',
	'Empowering Students Through Self-Directed Learning',
	'Mindful Classroom Management Techniques',
	'Incorporating Technology into Learning Activities',
	'Assessment Strategies for Student Growth',
	'Developing a Culturally Responsive Curriculum',
	'Creating Engaging Learning Experiences for Students',
	'Strategies for Effective Communication with Parents and Guardians',
	'Differentiating Instruction for Diverse Learners',
	'Critical Thinking and Problem-Solving Skills for Students',
	'Fostering Positive Social and Emotional Development in Students',
	'Effective Classroom Leadership Strategies',
	'Teaching Strategies for Students with Learning Differences',
	'Strategies for Effective Classroom Discipline',
	'Building Strong Student-Teacher Relationships',
	'Creating a Collaborative Learning Environment',
	'Effective Classroom Management for New Teachers',
	"Strategies for Supporting Students' Mental Health",
	'Integrating Arts and Creativity into Learning Activities',
	'Student Goal-Setting and Tracking Strategies',
	'Developing an Effective Classroom Culture',
	'Strategies for Engaging and Motivating Students',
	'Teaching Strategies for Effective Communication and Collaboration',
]

console.log(titles.length)
const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[array[i], array[j]] = [array[j], array[i]]
	}
	return array
}

exports.sessionTitles = shuffleArray(titles)
