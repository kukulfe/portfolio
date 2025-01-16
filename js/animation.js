gsap.registerPlugin(ScrollTrigger); 

gsap.from('#hero', {
    y: -400,
    duration: 2,
    opacity: 0,
    // ease: 'bounce'
})

gsap.from('#aboutIcon',{
    opacity:0,
    x: -200,
    scrollTrigger:{
        // markers: true,
        trigger: '#aboutMe',
        start: 'top 70%',
        end:'30% 50%',
        scrub: 3,
    }
})

gsap.from('#aboutText',{
    opacity:0,
    x: 300,
    scrollTrigger:{
        // markers: true,
        trigger: '#aboutMe',
        start: 'top 70%',
        end:'30% 50%',
        scrub: 3,
    }
})

gsap.from('[data-skill-card]',{
    stagger:0.3,
    opacity:0,
    // y:200,
    scale: 0,
    scrollTrigger:{
        // markers: true,
        trigger: '#listSkills',
        start: 'top 70%',
        end:'30% 50%',
        scrub: 2,
    }
})

gsap.from('[data-card-project]',{
    stagger:0.3,
    opacity:0,
    x:-400,
    scale: 0,
    scrollTrigger:{
        // markers: true,
        trigger: '#myWorks',
        start: 'top 70%',
        end:'30% 50%',
        scrub: 4,
    }
})

gsap.from('#reviewsContent',{
    opacity:0,
    // y:200,
    scale: 0,
    scrollTrigger:{
        // markers: true,
        trigger: '#reviews',
        start: 'top 70%',
        end:'30% 50%',
        scrub: 2,
    }
})

gsap.from('#invite',{
    opacity:0,
    x:-400,
    scale: 0,
    scrollTrigger:{
        // markers: true,
        trigger: '#contacts',
        start: '60% 90%',
        end:'60% 90%',
        scrub: 2,
    }
})

gsap.from('#contactsList',{
    opacity:0,
    x:400,
    scale: 0,
    scrollTrigger:{
        // markers: true,
        trigger: '#contacts',
        start: '60% 90%',
        end:'60% 90%',
        scrub: 2,
    }
})
