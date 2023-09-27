import { FavoriteSuggestion, LatestSuggestion } from '@tonkeeper/core/dist/entries/suggestion';
import { Input } from '@tonkeeper/uikit/dist/components/fields/Input';
import { SuggestionAddress } from '@tonkeeper/uikit/dist/components/transfer/SuggestionAddress';
import { useInputRefAutoFocus } from '@tonkeeper/uikit/dist/hooks/input';
import { useTranslation } from '@tonkeeper/uikit/dist/hooks/translation';
import { useAddFavorite, useEditFavorite } from '@tonkeeper/uikit/dist/state/suggestions';
import { useMainButton } from '@twa.js/sdk-react';
import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useMainButtonLoading } from './SendNotificationButtons';
import { useNativeBack } from './SendNotificationHeader';

const Block = styled.form`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    justify-content: center;
    gap: 1rem;
    width: 100%;
    padding-ton: 16px;
`;

const EditFavoriteContent: FC<{
    favorite: FavoriteSuggestion;
    onClose: () => void;
}> = ({ favorite, onClose }) => {
    const { t } = useTranslation();

    const mainButton = useMainButton();
    useNativeBack(onClose);

    const {
        mutateAsync: editAsync,
        reset,
        isLoading: isEditLoading,
        isError,
        error
    } = useEditFavorite();

    const ref = useInputRefAutoFocus(300);

    const [name, setName] = useState(favorite.name);

    const onName = (value: string) => {
        reset();
        setName(value.slice(0, 24));
    };

    useMainButtonLoading(isEditLoading);
    useEffect(() => {
        const handleSubmit = async () => {
            await editAsync({ favorite, name });
            onClose();
        };
        mainButton.setText(t('add_edit_favorite_save'));
        mainButton.on('click', handleSubmit);
        return () => {
            mainButton.off('click', handleSubmit);
        };
    }, [mainButton, name, editAsync, onClose]);

    return (
        <Block>
            <Input
                ref={ref}
                value={name}
                onChange={onName}
                label={t('add_edit_favorite_name_placeholder')}
                isValid={!isError}
                disabled={isEditLoading}
                helpText={error?.message}
            />
            <SuggestionAddress item={favorite} />
        </Block>
    );
};

const AddFavoriteContent: FC<{
    latest: LatestSuggestion;
    onClose: () => void;
}> = ({ latest, onClose }) => {
    const { t } = useTranslation();

    const mainButton = useMainButton();
    useNativeBack(onClose);

    const { mutateAsync, reset, isLoading, isError, error } = useAddFavorite();
    const ref = useInputRefAutoFocus(300);

    const [name, setName] = useState('');

    const onName = (value: string) => {
        reset();
        setName(value.slice(0, 24));
    };

    useEffect(() => {
        const handleSubmit = async () => {
            await mutateAsync({ latest, name });
            onClose();
        };
        mainButton.setText(t('add_edit_favorite_save'));
        mainButton.on('click', handleSubmit);
        return () => {
            mainButton.off('click', handleSubmit);
        };
    }, [mainButton, name, mutateAsync, onClose]);

    return (
        <Block>
            <Input
                ref={ref}
                value={name}
                onChange={onName}
                label={t('add_edit_favorite_name_placeholder')}
                isValid={!isError}
                disabled={isLoading}
                helpText={error?.message}
            />
            <SuggestionAddress item={latest} />
        </Block>
    );
};

export interface FavoriteState {
    favorite?: FavoriteSuggestion;
    latest?: LatestSuggestion;
}
export const FavoriteView: FC<{
    state?: FavoriteState;
    onClose: () => void;
}> = ({ state, onClose }) => {
    if (state?.favorite) {
        return <EditFavoriteContent favorite={state.favorite} onClose={onClose} />;
    } else if (state?.latest) {
        return <AddFavoriteContent latest={state.latest} onClose={onClose} />;
    } else {
        return <></>;
    }
};
