import { Divider } from "@mui/material";
import styles from "../sidenav.module.css";

function Home() {

  return (
    <div>
      <h3>
        <a href="http://localhost:3000/home" className={styles.link}>Sprawdź aktualności w tablicy ogłoszeń</a>
      </h3>
      <Divider />
      <h3> Strona główna</h3>
      <Divider />
      <p>
        {" "}
        Jeżeli jesteś zakwaterowany w domu studenckim, ale w menu nie pojawia
        się odnośnik "Dom studencki", skontaktuj się z kierownikiem domu
        studenckiego w celu dokonania wpisu do systemu.
      </p>
      <p>Szanowni Państwo!</p>
      <p>
        Serdecznie witamy w nowej wersji portalu studenckiego, w którym poza
        zmianą szaty graficznej zostały wprowadzone nowe funkcjonalności.
        Pierwszą podstawową zmianą jest sposób logowania, który aktualnie będzie
        odbywał się poprzez podanie numeru albumu. (Studenci, którzy w starej
        wersji portalu dokonali subskrypcji na więcej niż jeden numer albumu,
        proszeni są o podawanie podczas logowania hasła ustawionego dla albumu
        głównego).
      </p>
      <p>
        Po zalogowaniu zostaną przedstawione dane dla wszystkich numerów albumów
        jakie student miał lub ma w całym okresie studiów. Do aplikacji tej
        został wprowadzony mechanizm generowania numeru konta bankowego dla
        studentów mieszkających w domu studenckim, a także dla każdego numeru
        albumu zostaje wprowadzony jeden numer konta bankowego, obsługujący
        odpłatności na wszystkich tokach studiowania.
      </p>
      <p>
        Mamy nadzieję że nowa funkcjonalność będzie przyjazna i wygodna w
        obsłudze. W razie jakichkolwiek pytań lub uwag, prosimy je przesyłać na
        adres: <a href="http://localhost:3000/home" className={styles.link}>portal.uczelniany@info.p.lodz.pl</a> .
        Odbierane są wiadomości nadesłane z politechnicznych adresów poczty
        elektronicznej.{" "}
        <p>
          <a href="http://localhost:3000/home" className={styles.link}>Patrz zarządzenie Rektora >> </a>
        </p>
      </p>
      <p>
        Attention! Foreign students can obtain the PESEL number from the
        appropriate deanery.
      </p>
      <p>Uwaga Obcokrajowcy! Numer PESEL jest do pobrania w dziekanacie.</p>
      <h3>Uwaga studenci I roku</h3>
      <Divider />
      <p>
        W związku z rozporządzeniem Ministra Szkolnictwa Wyższego i Nauki, SJO
        PŁ informuje, że począwszy od roku 2009, wszyscy studenci I roku studiów
        dziennych mają obowiązek zdać egzamin na poziomie B2 (wyższy
        średniozaawansowany) najpóźniej do końca VI semestru. Egzamin można zdać
        z jednego, z nauczanych w Studium języków: angielskiego, niemieckiego,
        francuskiego, hiszpańskiego, rosyjskiego lub włoskiego.
      </p>
      <p>
        <a href="http://localhost:3000/home" className={styles.link}>Czytaj więcej w "Tablicy ogłoszeń" >></a>
      </p>
      <h3>Logowanie do portalu</h3>
      <Divider />
      <p>
        Pragniemy poinformować, że został wdrożony Centralny System
        Uwierzytelniania (tzw. CAS, od angielskiego Central Authentication
        Service). Ułatwi on użytkownikowi korzystanie z grupy serwisów webowych
        wymagających autoryzacji. Przy próbie logowania do jednego z takich
        serwisów użytkownik zostaje przekierowany na stronę logowania CAS, a po
        zalogowaniu uzyskuje przezroczyście dostęp do wszystkich serwisów, które
        współdziałają z CAS. CAS korzysta z jednego, wspólnego dla wszystkich
        serwisów, repozytorium kont.
      </p>
      <p>
        Jednocześnie nie jest już wymagane wypełnianie formularza logowania w
        portalu WebDziekanat. Aby się uwierzytelnić należy skorzystać z linku o
        nazwie 'Logowanie' umieszczonego w prawym górnym rogu strony.
      </p>
      <p>
        Po przejściu do strony logowania w CAS-ie należy podać swój
        identyfikator i hasło. W Politechnice Łódzkiej rolę identyfikatora w
        procesie uwierzytelniania pełni przydzielona nazwa konta poczty
        elektronicznej w formacie '[numer albumu]@edu.p.lodz.pl', np.
        '123@edu.p.lodz.pl'.
      </p>
      <p>Dotychczasowe hasło nie ulega zmianie.</p>
    </div>
  );
}

export default Home;
