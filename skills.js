import $ from 'jquery';

/*
    SKILLS LIST
    frequency 0 = sometimes use
    frequency 1 = daily use
*/
let skills = [
    {   name: "CSS",
        started: 2001,
        experience: [ "S1", "S2", "J1", "J2", "J3" ],
        frequency: 1,
        notes : ""
    }
];

export function setSkills() {
    skills.sort(function(a, b){
        var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()

        if (nameA < nameB)
            return -1; 
        if (nameA > nameB)
            return 1;
        return 0;
    });

    skills.map(function (skill) {
        // Set tooltip
        var experience, years, months, tooltip, group;
        years = (new Date(new Date() - new Date(skill.started + '-01-01')).getFullYear()) - 1970;
        months = (new Date(new Date() - new Date(skill.started + '-01-01')).getMonth());
        
        if (years == 1)
            tooltip = years + ' year of experience' + (skill.notes != null ? ' ' + skill.notes : '');
        else if (years > 1)
            tooltip = years + ' years of experience' + (skill.notes != null ? ' ' + skill.notes : '');
        else if (months > 0)
            tooltip = 'Less than a year of experience' + (skill.notes != null ? ' ' + skill.notes : '');
        else
            tooltip = skill.notes;

        group = (skill.frequency == 1 ? 'daily' : 'sometimes');
        
        $('ul#skills_' + group).append('<li data-toggle="tooltip" title="' + tooltip + '" data-skill="' + skill.name.toLowerCase() + '">' + skill.name + '</li>');

        if (skill['experience'].length > 0)
        {
            skill['experience'].map(function (application) {
                $('#' + application + ' .skills').append('<li data-skill="' + skill.name.toLowerCase() + '">' + skill.name + '</li>');

            });
        }
    });

    
}