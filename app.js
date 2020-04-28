// JavaScript imports
import 'bootstrap';
import $ from 'jquery';
require('font-awesome-loader');

// Local JavaScript imports
import { setSkills } from './skills';
import { setEducation } from './education';
import { setJobs } from './jobs';

// Style imports
require('!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css');
require('!style-loader!css-loader!../../dist/main.css');

// When document is ready
$( document ).ready(function() {
    setJobs();
    setEducation();
    setSkills();

    $('[data-toggle="tooltip"]').tooltip(); 

    $('.skills li').on('click', function(lmnt) {
        toggleSkill(lmnt.target);
    });

    $('#toTop').on('click', function () {
        window.scrollTo(0, 0);
    });
});

function toggleSkill(lmnt) {
    $('li[data-skill="' + lmnt.dataset.skill + '"]').toggleClass('active');
}
