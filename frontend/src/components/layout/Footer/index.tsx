import MainLogoSvg from '@/assets/image/mainlogo.svg?react';

import {
  FooterContainer,
  FooterLink,
  FooterNav,
  FooterText,
  FooterTextArea,
  GitHubIcon,
  ShareIcon
} from './index.styles';

export default function Footer() {
  // Web Share API 적용코드
  // const handleShareClick = async () => {
  //   if (navigator.share) {
  //     try {
  //       await navigator.share({
  //         title: document.title,
  //         text: '링크를 공유합니다.',
  //         url: window.location.href
  //       });
  //       console.log('링크를 공유했습니다!');
  //     } catch (error) {
  //       console.error('링크 공유에 실패했습니다.', error);
  //     }
  //   } else {
  //     // Web Share API를 지원하지 않는 경우
  //     // 대체 동작을 수행합니다.
  //     await share(window.location.origin);
  //   }
  // };

  // const share = async (text: string) => {
  //   try {
  //     await navigator.clipboard.writeText(text);
  //     alert('링크가 복사되었습니다!');
  //   } catch (e) {
  //     alert('초대코드 복사에 실패했습니다ㅜㅜ');
  //   }
  // };
  // const handleShareButtonClick = () => {
  //   handleShareClick();
  // };

  return (
    // <FooterWrapper>
    //   <LogoSvg className="text-sm" />
    //   <FooterTextArea>
    //     <FooterText>AYT Company</FooterText>
    //     <FooterText>All content is provided for fun purposes only</FooterText>
    //     <FooterText>Copyright © 2023 - All right reserved</FooterText>
    //   </FooterTextArea>

    //   <FooterLinkIcon>
    //     <FooterLink
    //       href="https://github.com/rebi13/MBTI-Inside"
    //       target="_blank"
    //       rel="MBTI-Inside noreferrer"
    //     >
    //       <GitHubSvg />
    //     </FooterLink>
    //     <FooterLink onClick={() => console.log('handleShareClick')}>
    //       <ShareSvg />
    //     </FooterLink>
    //   </FooterLinkIcon>
    // </FooterWrapper>
    <FooterContainer>
      <FooterTextArea>
        <MainLogoSvg />
        <FooterText>
          Copyright © 2024 All right reserved
          {/* <p>Copyright © 2024</p>
          <p>All right reserved</p> */}
        </FooterText>
      </FooterTextArea>
      <FooterNav>
        <a>
          <GitHubIcon />
        </a>
        <a>
          <ShareIcon />
        </a>
      </FooterNav>
    </FooterContainer>
  );
}
