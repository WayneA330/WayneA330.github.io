import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

const scrollTracker = document.querySelector('.scroll-tracker');

const scrollTrackingTimeline = new ScrollTimeline({
    source: document.scrollingElement, // don't need this
    orientation: 'block', // don't need this
    scrollOffsets: [CSS.percent(0), CSS.percent(100)]
});

const animatedEducation = document.querySelector('.timeline_container');

const animatedEducationTimeline = new ScrollTimeline({
    scrollOffsets: [
        { target: animatedEducation, edge: 'end', threshold: '0' },
        { target: animatedEducation, edge: 'start', threshold: '1' }
    ],
})

scrollTracker.animate(
    {
        transform: ['scaleX(0)', 'scaleX(1)']
    },
    {
        duration: 1,
        timeline: scrollTrackingTimeline,
    }
);

animatedEducation.animate(
    {
        transform: [
            'perspective(1000px) rotateX(45deg)',
            'perspective(1000px) rotate(0)'
        ],
        opacity: [ '0.05', '1' ]
    },
    {
        duration: 1,
        timeline: animatedEducationTimeline
    }
)














