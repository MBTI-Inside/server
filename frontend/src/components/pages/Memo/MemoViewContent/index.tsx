import * as S from '@/components/pages/Memo/MemoViewContent/index.styles';

const MemoViewContent = (params: any) => {
  const { id, title, content } = params.data;

  return (
    <S.MemoViewContentWrapper>
      <S.CardBody>
        <S.CardContent>
          <S.Title>{title}</S.Title>
          <S.Content>{content}</S.Content>
        </S.CardContent>
      </S.CardBody>
    </S.MemoViewContentWrapper>
  );
};

export default MemoViewContent;
