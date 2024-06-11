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
        <CardButton>Купить</CardButton>
    </div>
</template>

<script setup>
import CardButton from './CardButton';
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
}
</style>
