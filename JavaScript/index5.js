const grade_3_year = {
    student1: {
        name: 'Alberto Fernandes',
        matter: {
            matematica: {
                teacher: 'Tainá',
                note: 90,
                fouls: 5,
            },
            portugues: {
                teacher: 'Thais',
                note: 66,
                fouls: 5,
            },
            biologia: {
                teacher: 'Luci',
                note: 100,
                fouls: 0,
            },
            filosofia: {
                teacher: 'Willian',
                note: 80,
                fouls: 3,
            },
            fisica: {
                teacher: 'Adilmar',
                note: 75,
                fouls: 4,
            },
            quimica: {
                teacher: 'Jurema',
                note: 86,
                fouls: 2,
            },
            artes: {
                teacher: 'Rose',
                note: 90,
                fouls: 1,
            },
            educação_fisica: {
                teacher: 'Felipe',
                note: 100,
                fouls: 0,
            },
            historia: {
                teacher: 'Jucimara',
                note: 95,
                fouls: 1,
            },
            geografia: {
                teacher: 'Sônia',
                note: 78,
                fouls: 7,
            },
        },
    },
    student2: {
        name: 'Ryan Riquelme',
        matter: {
            matematica: {
                teacher: 'Tainá',
                note: 90,
                fouls: 3,
            },
            portugues: {
                teacher: 'Thais',
                note: 100,
                fouls: 0,
            },
            biologia: {
                teacher: 'Ricardo',
                note: 100,
                fouls: 0,
            },
            filosofia: {
                teacher: 'Willian',
                note: 90,
                fouls: 1,
            },
            fisica: {
                teacher: 'Adilmar',
                note: 85,
                fouls: 3,
            },
            quimica: {
                teacher: 'Jurema',
                note: 90,
                fouls: 2,
            },
            artes: {
                teacher: 'Rose',
                note: 90,
                fouls: 1,
            },
            educação_fisica: {
                teacher: 'Felipe',
                note: 100,
                fouls: 0,
            },
            historia: {
                teacher: 'Jucimara',
                note: 95,
                fouls: 1,
            },
            geografia: {
                teacher: 'Sônia',
                note: 89,
                fouls: 3,
            },
        },
    },
    student3: {
        name: 'Isabelle Felix',
        matter: {
            matematica: {
                teacher: 'Tainá',
                note: 35,
                fouls: 7,
            },
            portugues: {
                teacher: 'Thais',
                note: 10,
                fouls: 10,
            },
            biologia: {
                teacher: 'Ricardo',
                note: 0,
                fouls: 15,
            },
            filosofia: {
                teacher: 'Willian',
                note: 90,
                fouls: 1,
            },
            fisica: {
                teacher: 'Adilmar',
                note: 55,
                fouls: 7,
            },
            quimica: {
                teacher: 'Jurema',
                note: 47,
                fouls: 8,
            },
            artes: {
                teacher: 'Rose',
                note: 90,
                fouls: 0,
            },
            educação_fisica: {
                teacher: 'Felipe',
                note: 100,
                fouls: 0,
            },
            historia: {
                teacher: 'Jucimara',
                note: 95,
                fouls: 1,
            },
            geografia: {
                teacher: 'Sônia',
                note: 89,
                fouls: 3,
            },
        },
    },
};

// Aluno 1

const nota_matematica = grade_3_year.student1.matter.matematica.note
const nota_portugues = grade_3_year.student1.matter.portugues.note
const nota_biologia = grade_3_year.student1.matter.biologia.note
const nota_filosofia = grade_3_year.student1.matter.filosofia.note
const nota_fisica = grade_3_year.student1.matter.fisica.note
const nota_quimica = grade_3_year.student1.matter.quimica.note
const nota_artes = grade_3_year.student1.matter.artes.note
const nota_educaçao_fisica = grade_3_year.student1.matter.educação_fisica.note
const nota_historia = grade_3_year.student1.matter.historia.note
const nota_geografia = grade_3_year.student1.matter.geografia.note

if (
    nota_matematica >= 60 
    && nota_portugues >= 60
    && nota_biologia >= 60 
    && nota_filosofia >= 60
    && nota_fisica >= 60 
    && nota_quimica >= 60 
    && nota_artes >= 60 
    && nota_educaçao_fisica >= 60 
    && nota_historia >= 60 
    && nota_geografia >= 60
    ) { 
    console.log ('Aprovado')
} else {
    console.log ('Reprovado')
}

// Aluno 2

const nota_matematica_2 = grade_3_year.student2.matter.matematica.note
const nota_portugues_2 = grade_3_year.student2.matter.portugues.note
const nota_biologia_2 = grade_3_year.student2.matter.biologia.note
const nota_filosofia_2 = grade_3_year.student2.matter.filosofia.note
const nota_fisica_2 = grade_3_year.student2.matter.fisica.note
const nota_quimica_2 = grade_3_year.student2.matter.quimica.note
const nota_artes_2 = grade_3_year.student2.matter.artes.note
const nota_educaçao_fisica_2 = grade_3_year.student2.matter.educação_fisica.note
const nota_historia_2 = grade_3_year.student2.matter.historia.note
const nota_geografia_2 = grade_3_year.student2.matter.geografia.note

if (
    nota_matematica_2 >= 60
    && nota_portugues_2 >= 60
    && nota_biologia_2 >= 60
    && nota_filosofia_2 >= 60
    && nota_fisica_2 >= 60
    && nota_quimica_2 >= 60
    && nota_artes_2 >= 60
    && nota_educaçao_fisica_2 >= 60
    && nota_historia_2 >= 60
    && nota_geografia_2 >= 60
    ) {
    console.log('Aprovado')
} else {
    console.log('Reprovado')
}

// Aluno 3

const note_matematica_3 = grade_3_year.student3.matter.matematica.note
const note_portugues_3 = grade_3_year.student3.matter.portugues.note
const note_biologia_3 = grade_3_year.student3.matter.biologia.note
const note_filosofia_3 = grade_3_year.student3.matter.filosofia.note
const note_fisica_3 = grade_3_year.student3.matter.fisica.note
const note_quimica_3 = grade_3_year.student3.matter.quimica.note
const note_artes_3 = grade_3_year.student3.matter.artes.note
const note_educaçao_fisica_3 = grade_3_year.student3.matter.educação_fisica.note
const note_historia_3 = grade_3_year.student3.matter.historia.note
const note_geografia_3 = grade_3_year.student3.matter.geografia.note

if (
    note_matematica_3
    && note_portugues_3
    && note_biologia_3
    && note_filosofia_3
    && note_fisica_3
    && note_quimica_3
    && note_artes_3
    && note_educaçao_fisica_3
    && note_historia_3
    && note_geografia_3
) {
    console.log ('Aprovado')    
} else {
    console.log ('Reprovado')
}
