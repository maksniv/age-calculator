import styles from './App.module.scss';
import Input from './components/Input/Input';
import ResultBlock from './components/ResultBlock/ResultBlock';
import { useForm, Controller, useFormState } from 'react-hook-form';
import { useEffect, useState } from 'react';
import {
  dayValidation,
  monthValidation,
  yearValidation,
} from './utils/validation';
import { dateMatch } from './utils/time';

function App() {
  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      days: '',
      months: '',
      years: '',
    },
  });

  const { errors, isValid } = useFormState({ control });

  const [days, setDays] = useState();
  const [months, setMonths] = useState();
  const [years, setYears] = useState();

  const onSubmit = (birthDate) => {
    const answer = dateMatch(birthDate);
    setDays(answer.days);
    setMonths(answer.months);
    setYears(answer.years);
  };

  useEffect(() => {
    reset({
      days: '',
      months: '',
      years: '',
    });
  }, [isSubmitSuccessful]);

  return (
    <div className={styles.container}>
      <form
        id="birthday"
        className={styles.container__form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="days"
          control={control}
          rules={dayValidation}
          render={({ field }) => (
            <Input
              description={'DAY'}
              onChange={(event) => field.onChange(event)}
              value={field.value}
              maxLength={2}
              placeholder={'DD'}
              errors={errors.days?.message}
            />
          )}
        />
        <Controller
          name="months"
          control={control}
          rules={monthValidation}
          render={({ field }) => (
            <Input
              description={'MONTH'}
              onChange={(event) => field.onChange(event)}
              value={field.value}
              maxLength={2}
              placeholder={'MM'}
              errors={errors.months?.message}
            />
          )}
        />
        <Controller
          name="years"
          control={control}
          rules={yearValidation}
          render={({ field }) => (
            <Input
              description={'YEAR'}
              onChange={(event) => field.onChange(event)}
              value={field.value}
              maxLength={4}
              placeholder={'YYYY'}
              errors={errors.years?.message}
            />
          )}
        />
        <button
          type="submit"
          form="birthday"
          className={styles.container__button}
          disabled={!isValid}
        ></button>
      </form>
      <div className={styles.result}>
        <ResultBlock description={'years'} answer={years} />
        <ResultBlock description={'months'} answer={months} />
        <ResultBlock description={'days'} answer={days} />
      </div>
    </div>
  );
}

export default App;
