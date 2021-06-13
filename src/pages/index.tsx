import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja os profissionais da sua localidade"
        }
      />

      <UserInformation
        name={"Bruno Batalha"}
        picture={"https://github.com/brbatalha.png"}
        rating={3}
        description={"São Paulo"}
      />

      <UserInformation
        name={"Clarissa Batalha"}
        picture={"https://github.com/clarissabatalha.png"}
        rating={2}
        description={"São Paulo"}
      />
    </div>
  );
}
