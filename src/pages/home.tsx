import * as React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '~/shared/ui/button'
import { paths } from '.'
import { Dialog } from '~/shared/ui/dialog'

export const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Link to={paths.todo(666)}>Single todo</Link>
      <Button color='secondary'>Test 2</Button>
      <DemoDialog />
    </div>
  )
}

const DemoDialog: React.FC = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button color='primary'>Test 1</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et repudiandae error dignissimos
          itaque harum. Delectus saepe illum, vel ducimus aspernatur atque quidem nemo qui sapiente
          ipsum beatae placeat neque aliquid? Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Numquam quas laboriosam facere dolore sint, laudantium architecto cum praesentium
          laborum voluptatum modi ducimus est recusandae a magnam veniam corrupti, facilis
          reprehenderit voluptatem voluptates quos corporis? Architecto esse repellendus pariatur,
          illum sequi aliquam eos temporibus soluta, a blanditiis totam id modi, veniam voluptate
          consequuntur quis ut mollitia nemo iure vero. Et sed incidunt quidem itaque harum magni
          delectus optio, laudantium magnam dolore aut explicabo voluptas eum libero pariatur quos
          illo odit qui! Accusantium, cupiditate odit, iste id natus, magnam inventore asperiores
          labore est illo repudiandae voluptas error. Voluptate expedita eum blanditiis quisquam
          deserunt, eos id ratione tempora, quos vero alias incidunt doloribus fuga aliquid et
          cupiditate voluptatem? Quis nostrum eveniet fugiat nisi quos cumque, ipsam perferendis
          beatae voluptate quaerat. Modi eum amet possimus dolor magni accusantium minima rem cumque
          ab voluptas reprehenderit est eos, odio saepe repellat harum. Earum dignissimos eius
          assumenda quaerat odio odit. Voluptatum pariatur ipsam, odio debitis dicta nostrum, culpa
          reiciendis qui illum sequi nisi libero itaque non explicabo at! Beatae quae sed odit
          quasi, eligendi a excepturi quibusdam voluptatem, quia doloribus similique, amet nostrum
          voluptatibus. Sed saepe dolorem ipsa voluptatem non, voluptate nihil? Laudantium
          cupiditate nihil, totam tempore ducimus molestiae magni dolores maxime placeat quam eius
          aperiam. Illo enim maxime vel veniam atque? Sint ex quod voluptatibus explicabo adipisci
          distinctio neque mollitia atque, recusandae fuga saepe velit labore architecto eaque
          delectus? Velit aspernatur nobis dolores reiciendis nisi voluptatem tempore sed possimus,
          nostrum ullam saepe debitis eveniet porro eos consequuntur pariatur? Blanditiis delectus
          incidunt modi? Officiis quibusdam ipsam molestiae magnam nihil iure sapiente laborum
          dolores consequuntur voluptatibus eligendi tempora nobis minus, vero rem amet illo quis
          voluptas obcaecati? Recusandae officiis, adipisci ea consequatur quod sequi at qui
          similique quae dolorem vel? Dolorum, pariatur? Unde in hic culpa ratione? Hic non ipsa
          illum vero, odio quasi sunt dicta quas officiis obcaecati enim nam ea architecto
          praesentium at accusantium ad reprehenderit voluptatibus harum vel expedita? Maxime illum
          provident, eum sapiente eos aspernatur, animi adipisci quisquam dolorem repellendus
          mollitia nulla quam culpa iste velit officiis delectus eaque vel saepe, ratione fuga modi
          tempore aliquam voluptate! Libero vitae id sint minus numquam vel, similique enim error
          quae quia eius rem velit magni distinctio eum laborum ratione est autem hic sed placeat
          cumque quam! Quisquam repellendus quasi doloremque possimus praesentium maiores,
          voluptatum cumque labore tenetur quibusdam recusandae facilis? Fugiat repellendus
          temporibus, necessitatibus velit sapiente quasi quibusdam facilis. Delectus optio corporis
          eaque qui nobis necessitatibus adipisci nostrum. Magnam perspiciatis tenetur ab voluptates
          omnis esse molestias dolorum perferendis veritatis commodi porro, asperiores quidem
          laudantium possimus repellat aut suscipit voluptatibus culpa deleniti adipisci, incidunt
          dolores. Ab nulla voluptatum illo possimus ut corrupti architecto. Iste illum nobis odit
          pariatur illo delectus cum itaque fugiat commodi tenetur maxime minima, architecto ullam
          impedit aliquam nostrum quod maiores vero rerum dignissimos! Sunt iure similique
          blanditiis debitis unde eius minus dolorem nobis autem, nisi beatae qui odio veniam
          adipisci omnis dignissimos, dolor vero, laboriosam id ea hic? Maiores molestiae,
          molestias, totam quibusdam magnam ipsum, ipsam facere tempora atque delectus ipsa optio
          numquam laboriosam tenetur? Consequuntur laboriosam corporis eaque aliquam dolorem
          nesciunt illum reprehenderit, delectus veniam maiores animi neque labore repudiandae
          expedita et dignissimos mollitia repellat. Voluptatibus cumque consequatur laborum
          necessitatibus architecto ad, explicabo nulla tempora saepe vero, repudiandae, voluptate
          in soluta ipsum ullam voluptatem vel. Illum aut rem pariatur optio quasi asperiores ipsa
          fugit. Asperiores eius aperiam esse eveniet repudiandae mollitia similique tempora
          recusandae quam vero. Dignissimos nisi voluptatem illum voluptates perferendis, numquam
          ullam. Nam, quam. Repudiandae, dolores! Maiores tempore iure repellat enim suscipit harum
          cum unde! Totam magnam error delectus sequi asperiores cumque officiis neque consequuntur
          deserunt eligendi harum rerum doloribus dolores, facilis dolor voluptatibus debitis
          sapiente tempora soluta. Consequatur quibusdam, itaque ratione quas repudiandae id harum
          odio obcaecati vel laboriosam dolorem fugiat nesciunt voluptate. Voluptate numquam quo sit
          possimus, rem doloremque quasi a enim et itaque dignissimos atque, reiciendis fugit soluta
          nisi illo sint, omnis sapiente nam! Aperiam corrupti nulla unde ratione eaque, quam cum
          enim totam, pariatur atque optio hic eveniet esse facilis sint perspiciatis. Tempore,
          suscipit molestiae hic blanditiis modi non doloribus dolores odio. Doloremque ad odit
          libero a placeat minus, voluptas vitae pariatur facere ex voluptate et sed perspiciatis!
          Repellat quia doloribus dolor officia, impedit repudiandae architecto deleniti
          necessitatibus quibusdam maxime temporibus voluptatibus aut, nisi at quaerat commodi omnis
          soluta velit sed iusto ratione a ex facere! Repudiandae iste consequuntur perferendis?
          Eveniet perferendis quas quae repellat neque officiis commodi quo placeat harum, mollitia
          earum id ipsum corporis voluptas cumque reiciendis nemo incidunt voluptatum iure ex
          quisquam nesciunt ut. Alias nisi nesciunt explicabo perferendis sed. Excepturi fuga
          officia accusantium, dolores magni harum, facere libero inventore rem quidem rerum
          pariatur modi amet distinctio voluptatibus odit placeat dicta sint! Itaque suscipit non,
          eligendi beatae necessitatibus praesentium eaque. Autem assumenda tempore sint ut esse
          ipsam nam ipsa expedita omnis? Praesentium facilis non optio, qui consectetur iure eius ab
          sequi explicabo tempora reiciendis, a at. Eum adipisci dolorem officiis earum! Dolorum
          autem velit enim, delectus totam neque voluptates consequuntur laboriosam, nostrum sed
          expedita. Dolorum voluptatem odit vero, ullam sed eos porro excepturi neque, natus quasi
          voluptatibus. Deserunt, excepturi! Odio fuga ipsa ipsam suscipit praesentium cumque
          voluptatem, itaque nostrum accusamus, totam enim distinctio dolorum quia vel omnis et quo
          aspernatur ex dolore, beatae inventore ab deserunt. Aliquam et eos laborum beatae atque
          eum impedit inventore soluta id eius nemo, sit, numquam quod eligendi placeat tempore
          perspiciatis harum nihil similique adipisci. Quae repellendus atque impedit incidunt.
          Debitis, vel commodi repellendus dolor rerum harum. Eligendi, repellat consequatur
          molestiae quia cupiditate recusandae quis labore quisquam beatae quae similique dicta
          ratione accusamus assumenda officiis exercitationem delectus amet! Ducimus quas facilis
          molestias eaque pariatur dicta, sint aliquam id iusto commodi nam veniam, sed cumque
          necessitatibus suscipit ad impedit molestiae numquam odit voluptatibus quidem dolores
          harum optio. Voluptates illo neque magni assumenda rerum consequatur iusto corrupti, eum
          numquam minus, quasi inventore doloremque ratione corporis quod explicabo! Impedit illum
          quasi at praesentium? Accusantium molestiae non soluta, ratione doloremque porro alias?
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
