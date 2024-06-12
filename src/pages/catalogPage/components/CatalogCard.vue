<template>
    <div class="card">
        <div class="card__image">
            <div class="hit">
                Хит Продаж
                <img src="@/assets/images/hit.svg" alt="" />
            </div>
            <div class="discount">25%</div>
        </div>
        <div class="card__description">
            <div class="card__description-brand">Бренд</div>
            <div class="card__description-text">
                Полное название товара в несколько строк для вида с обрывом в
                конце...Полное название товара в несколько строк для вида с
                обрывом в конце...Полное название товара в несколько строк для
                вида с обрывом в конце...
            </div>
        </div>
        <div class="card__description-price">
            <div class="new-price">5 990</div>
            <div class="old-price">5 990</div>
        </div>
        <button v-if="!activeBtn" class="card__buy-button" type="button">
            Купить
        </button>
        <button v-else class="card__message-button" type="button">
            Сообщить о поступлении
        </button>
    </div>
</template>

<script setup>
const props = defineProps({
    activeBtn: {
        type: Boolean,
        required: false,
    },
});
</script>

<style lang="scss" scoped>
.card {
    color: var(--text-color);
    &__image {
        height: 200px;
        background-color: rgb(248, 248, 250);
        background-image: url('@/assets/images/card-box.svg');
        background-repeat: no-repeat;
        background-position: center;
        position: relative;
        .hit {
            display: flex;
            justify-content: space-around;
            gap: 7px;

            color: var(--text-color);
            font-size: 14px;
            font-weight: 400;
            line-height: 16px;

            padding: 8px;
            width: 112px;

            border: 1px solid rgb(242, 242, 242);
            border-radius: 4px;
            background-color: var(--background-color);

            position: absolute;
            top: 12px;
            left: 12px;
        }

        .discount {
            background-color: var(--button-text-color);
            width: 48px;
            border-radius: 4px;
            color: var(--background-color);
            text-align: center;

            position: absolute;
            top: 162px;
            left: 12px;
        }
    }

    &__description {
        margin-top: 16px;
        &-brand {
            color: var(--stroke-color);
            margin-bottom: 8px;
        }
        &-text {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3; /* Показывает только 3 строки */
            overflow: hidden;
            cursor: pointer;
            &:hover {
                color: rgb(18, 91, 174);
            }
        }

        &-price {
            margin: 16px 0;
            display: flex;
            gap: 8px;
            align-items: flex-start;
            .new-price {
                font-size: 16px;
                font-weight: 700;
            }

            .old-price {
                font-size: 12px;
                font-weight: 400;
                color: var(--stroke-color);
                text-decoration: line-through;
            }
        }
    }
    &__buy-button {
        padding: 10px 15px;
        outline: none;
        background: none;
        border: 1px solid var(--button-text-color);
        border-radius: 4px;
        cursor: pointer;
        color: rgb(115, 151, 245);
        font-size: 14px;
        transition: border-color 0.3s ease, transform 0.1s ease, color 0.3s ease,
            box-shadow 0.1s ease;
        &:hover {
            border-color: var(--border-hover);
            color: var(--border-hover);
        }
        &:active {
            transform: translateY(0px);
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        }
    }
    &__message-button {
        color: rgb(170, 170, 170);
        font-size: 14px;
        font-weight: 700;
        outline: none;
        background: none;
        padding: 12px 16px;
        border: 1px solid rgb(170, 170, 170);
        border-radius: 4px;
        transition: border-color 0.3s ease, transform 0.1s ease, color 0.3s ease,
            box-shadow 0.1s ease;
        &:hover {
            border-color: rgb(78, 74, 74);
            color: rgb(71, 65, 65);
        }
        &:active {
            transform: translateY(
                0px
            ); /* Перемещение кнопки вниз при нажатии */
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Тень кнопки при нажатии */
        }
    }
}
</style>
