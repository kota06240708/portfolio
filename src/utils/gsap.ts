import gsap from 'gsap';

export const gsapTo: (el: HTMLElement | HTMLElement[], args: gsap.TweenVars) => Promise<unknown> = (
  el: HTMLElement | HTMLElement[],
  args: gsap.TweenVars
) => {
  return new Promise((resolve) => {
    gsap.to(el, {
      ...args,
      onComplete: () => {
        resolve('');
      }
    });
  });
};
