import { trim } from '@meoc/utils';
import { cacheTransformSelector, defaultRules } from '../utils';
/**
 * 获取class
 */
export function getClass(code: string): string[][] {
  const matchs: string[][] = [];
  // vue
  Array.from(code.matchAll(/\s:?[A-Za-z0-9]*(?:c|C|custom-c|customC)lass="([\s\S]*?)"/g)).forEach(
    (m) => {
      const classStr = m[1];
      const sourceStr = trim(m[0]);

      let classArr = [sourceStr];

      // 是否为动态class :class
      if (sourceStr.startsWith(':')) {
        if (classStr.startsWith('{'))
          classArr = classArr.concat(getObjClass(classStr));
        else if (classStr.startsWith('['))
          classArr = classArr.concat(getArrClass(classStr));
      } else {
        classArr.push(classStr);
      }

      matchs.push(classArr);
    }
  );

  // react className="xxxx"
  Array.from(
    code.matchAll(/\s:?[A-Za-z0-9]*[c|C]lassName=["']([\s\S]*?)["']/g)
  ).forEach((m) => {
    matchs.push([m[0], m[1]]);
  });

  // className={xxxx}
  // Array.from(
  //   code.matchAll(/\s:?[A-Za-z0-9]*[c|C]lassName=\{([\s\S]*?)\}/g)
  // ).forEach((m) => {
  //   matchs.push([
  //     m[0],
  //     ...Array.from(m[1].matchAll(/["']([\s\S]+?)["']/g)).map((v) => v[1])
  //   ]);
  // });

  return matchs;
}

export function getObjClass(className: string): string[] {
  // class="{ 'bg-teal-200:55': title === 'Hello', 'h-1.000%': title === 'Hello' }"
  // => ['bg-teal-200:55','h-1.000%']
  return Array.from(className.matchAll(/'([^']+)'\s*:/g)).map((v) => v[1]);
}

export function getArrClass(className: string): string[] {
  // [
  //   title === '2.3' ? 'font-$font-name bg-teal-200:55' :'tracking-[2/5]',
  //   isFont ? 'font-$font-name' : 'tracking-[2/5]'
  // ]
  // => ['font-$font-name bg-teal-200:55', 'tracking-[2/5]','font-$font-name', 'tracking-[2/5]']
  return Array.from(className.matchAll(/(?<=[?:&])\s*'(.*?)'/g)).map(
    (v) => v[1]
  );
}
// let set = new Set;
export function transformCode(code: string, rules = defaultRules): string {
  const classNames = getClass(code);
  // const size = set.size
  classNames.forEach((c) => {
    let currentClass = c[0];
    // let hoverClass:string[] = [];
    c.slice(1).forEach((selector) => {
      // Array.from(selector.matchAll(/(?:hover|active):(\S+)/g)).forEach((m) => {
      //   const se = m[1]
      //   // let ue = m[1]
      //   // if(!se.startsWith('!')){
      //   //   se = '!'+se
      //   // }else{
      //   //   ue = se.replace('!','')
      //   // }
      //   hoverClass.push(cacheTransformSelector(se, rules))
      //   context?.tokens?.add(se)
      //   // if(!set.has(se)){
      //   //   context?.uno?.config?.shortcuts?.push([se,ue])
      //   //   set.add(se)
      //   // }
      //   selector.replace(m[0],"")
      //   currentClass = currentClass.replace(m[0],"");
      // })
      currentClass = currentClass.replace(
        selector,
        cacheTransformSelector(selector, rules)
      );
    });
    // if(hoverClass.length>0){
    //   code = code.replace(c[0], currentClass + ' hover-class="'+hoverClass.join(' ')+'"');
    // }else{
      code = code.replace(c[0], currentClass);
    // }
  });
  return code;
}
