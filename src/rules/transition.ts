import type { Rule } from '@unocss/core';
import type { Theme } from '../theme/types';
import { time } from '../utils';
function resolveTransitionProperty(prop: string): string | undefined {
  let p: string | undefined;
  const allProps = [
    'all',
    'none',
    'width',
    'height',
    'margin',
    'margin-top',
    'margin-bottom',
    'margin-left',
    'margin-right',
    'left',
    'right',
    'top',
    'bottom',
    'padding',
    'padding-left',
    'padding-right',
    'padding-top',
    'padding-bottom',
    'opacity',
    'background-color',
    'border-color',
    'border-top-color',
    'border-bottom-color',
    'border-left-color',
    'border-right-color',
    'transform'
  ];
  if (allProps.includes(prop)) {
    p = prop;
  } else {
    if (prop.startsWith('[') && prop.endsWith(']')) {
      p = prop.slice(1, -1);
    }
  }

  return p;
}

export const transitions: Rule<Theme>[] = [
  // transition
  [
    /^transition(?:-(\D+?))?(?:-(\d+))?$/,
    ([, prop, d]) => {
      if (!prop && !d) {
        return {
          'transition-property': 'all',
          'transition-timing-function': 'ease',
          'transition-duration': time('150')
        };
      } else if (prop != null) {
        const p = resolveTransitionProperty(prop);
        const duration = time(d || '150');

        if (p) {
          return {
            'transition-property': p,
            'transition-timing-function': 'ease',
            'transition-duration': duration
          };
        }
      } else if (d != null) {
        return {
          'transition-property': 'all',
          'transition-timing-function': 'ease',
          'transition-duration': time(d)
        };
      }
    },
    {
      autocomplete: 'transition-$transitionProperty-$duration'
    }
  ],

  // timings
  [
    /^(?:transition-)?duration-(.+)$/,
    ([, d]) => ({ 'transition-duration': time(d) }),
    { autocomplete: ['transition-duration-$duration', 'duration-$duration'] }
  ],

  [
    /^(?:transition-)?delay-(.+)$/,
    ([, d]) => ({ 'transition-delay': time(d) }),
    { autocomplete: ['transition-delay-$duration', 'delay-$duration'] }
  ],

  [
    /^(?:transition-)?ease(?:-(.+))?$/,
    ([, d]) => ({ 'transition-timing-function': d ?? 'ease' }),
    {
      autocomplete: [
        'transition-ease-(linear|in|out|in-out|DEFAULT)',
        'ease-(linear|in|out|in-out|DEFAULT)'
      ]
    }
  ],

  // props
  [
    /^(?:transition-)?property-(.+)$/,
    ([, v]) => {
      const p = resolveTransitionProperty(v);
      if (p) return { 'transition-property': p };
    },
    {
      autocomplete: [
        'transition-property-$transitionProperty',
        'property-$transitionProperty'
      ]
    }
  ],

  // none
  ['transition-none', { transition: 'none' }]
];
