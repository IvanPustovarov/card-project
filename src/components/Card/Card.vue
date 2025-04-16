<script setup lang="ts">
import Button from "../Button/Button.vue";
import Input from "../Input/Input.vue";
import BackArrow from "../../assets/img/BackArrow.vue";
import LeftPartCard from "./LeftPartCard.vue";
import RightCard from "./RightCard.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const handleBack = () => {
  router.back();
};
</script>

<template>
  <div>
    <div v-if="$route.params.type === 'wb'">
      <div>
        <Button text="Назад" type="back" @click="handleBack">
          <BackArrow />
        </Button>
        <h2 class="big-header">Импортирование карточек товара из WB</h2>
      </div>
      <div class="card">
        <LeftPartCard>
          <p>
            Войдите в личный кабинет Wildberries -> Настройки -> Доступ к API ->
            Создать новый токен
          </p>

          <p>Во вкладке Доступ к API</p>

          <p>1. Нажмите на кнопку "Создать новый токен"</p>

          <p>
            2. Создание нового токена:• Введите Имя Токена - “Importo”• Выберете
            все Методы API• Нажмите создать токен
          </p>

          <p>3. Скопируйте ключ</p>

          <p>Дождитесь появления данных — 3-10 минут</p>
        </LeftPartCard>
        <RightCard>
          <Input placeholder="Введите название магазина" />
          <Input placeholder="Введите API key" />
          <Button text="Импортировать" type="default" />
        </RightCard>
      </div>
    </div>
    <div v-if="$route.params.type === 'ozon'">
      <div>
        <Button text="Назад" type="back" @click="handleBack">
          <BackArrow />
        </Button>
        <h2 class="head-title">Импортирование карточек товара из OZON</h2>
      </div>
      <div class="card">
        <LeftPartCard>
          <p>Войдите в личный кабинет OZON Seller -> Настройки -> API ключи</p>

          <p>Во вкладке Seller API</p>

          <p>
            1. Client ID: скопируйте Client ID и вставьте Client ID в
            соответствующее поле
          </p>
          <p>
            2. API Key: Сгенерировать ключ API Key -> Название ключа -> Выберите
            роль — Admin read only -> Скопируйте сгенерированный ключ ивставьте
            всоответствующее поле
          </p>

          <p>Дождитесь появления данных — 3-10 минут</p>
        </LeftPartCard>
        <RightCard>
          <Input placeholder="Введите название магазина" />
          <Input placeholder="Введите Client ID" />
          <Input placeholder="Введите API key" />
          <Button text="Импортировать" type="default">
            <BackArrow />
          </Button>
        </RightCard>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.head-title {
  font-size: 50px;
  font-weight: 500;
  margin: 30px 0;
  padding: 0;
}
.card {
  display: flex;
  gap: 30px;
  max-width: 1150px;
  width: 100%;
}

p {
  font-size: 25px;
}
</style>
